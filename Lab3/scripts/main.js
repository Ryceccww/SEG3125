function openInfo(evt, tabName) {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}
function open(evt, tabName) {
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateListProductChoices(slct1,slct2) {
    var s1 = document.getElementsByName(slct1);
    var s11;//restriction
    for (var i=0;i<s1.length;i++){
        if(s1[i].checked==true){
            s11=s1[i];
        }
    }
    var s2 = document.getElementById("displayProduct");
    // var s21 = document.getElementById("displayVegetable");
    // var s22 = document.getElementById("displayFruit");
    // var s23 = document.getElementById("displayMeat");
    // var s24 = document.getElementById("displayOther");


    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    // s21.innerHTML = "";
    // s22.innerHTML = "";
    // s23.innerHTML = "";
    // s24.innerHTML = "";
    // var optionArray1=[];
    // var optionArray2=[];
    // var optionArray3=[];
    // var optionArray4=[];
    // var productName = optionArray[i];
    //

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s11.value);
    for (i = 0; i < optionArray.length; i++) {
        var productName = optionArray[i];
        var myImage = document.createElement("img");
        myImage.src = "Images/" + productName + ".jpg";
        myImage.setAttribute("height", "40");
        myImage.setAttribute("width", "40");
        s2.appendChild(myImage);

        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        s2.appendChild(label);

        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));
        // for (i = 0; i < optionArray.length; i++){
        //     if (products[findProduct(productName)].type="vegetable"){
        //         optionArray1[optionArray1.length]=productName;
        //     }
        // }
        // for (i = 0; i < optionArray.length; i++){
        //     if (products[findProduct(productName)].type="fruit"){
        //         optionArray2[optionArray2.length]=productName;
        //     }
        // }
        // for (i = 0; i < optionArray.length; i++){
        //     if (products[findProduct(productName)].type="meat"){
        //         optionArray3[optionArray3.length]=productName;
        //     }
        // }
        // for (i = 0; i < optionArray.length; i++){
        //     if (products[findProduct(productName)].type="other"){
        //         optionArray4[optionArray4.length]=productName;
        //     }
        // }
        // generate(optionArray1,s21);
        // generate(optionArray2,s22);
        // generate(optionArray3,s23);
        // generate(optionArray4,s24);

        // for each item in the array, create a checkbox element, each containing information such as:
        // <input type="checkbox" name="product" value="Bread">
        // <label for="Bread">Bread/label><br>
    }

}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var myImage = document.createElement("img");
            myImage.src ="Images/"+ele[i].value+".jpg";
            myImage.setAttribute("height","40");
            myImage.setAttribute("width","40");
            para.appendChild(myImage)

            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
}
