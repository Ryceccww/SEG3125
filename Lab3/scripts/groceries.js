var products = [
    {
        name: "$1.99 organic broccoli",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 1.99,
        type: "vegetable"
    },
    {
        name: "$2.35 bread",
        vegetarian: true,
        glutenFree: false,
        organic:false,
        price: 2.35,
        type: "other"
    },
    {
        name: "$10.00 salmon",
        vegetarian: false,
        glutenFree: true,
        organic:false,
        price: 10.00,
        type: "other"
    },
    {
        name: "$1.55 organic apple",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 1.55,
        type: "fruit"
    },
    {
        name: "$1.35 organic orange",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 1.35,
        type: "fruit"
    },
    {
        name: "$2.55 organic banana",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 2.55,
        type: "fruit"
    },
    {
        name: "$4.55 pork",
        vegetarian: false,
        glutenFree: true,
        organic:false,
        price: 4.55,
        type: "meat"
    },
    {
        name: "$5.55 beef",
        vegetarian: false,
        glutenFree: true,
        organic:false,
        price: 5.55,
        type: "meat"
    },
    {
        name: "$1.25 cucumber",
        vegetarian: true,
        glutenFree: true,
        organic:false,
        price: 1.25,
        type: "vegetable"
    },
    {
        name: "$1.78 tomato",
        vegetarian: true,
        glutenFree: true,
        organic:false,
        price: 1.78,
        type: "vegetable"
    }
];

function findProduct(name){
    for (let i=0; i<products.length;i++){
        if (products[i]=name){
            return i;
        }
    }
}
function restrictListProducts(prods, restriction) {
    let max=prods.length-1;
    for(let i=0; i<prods.length-1;i++){
        let flag=true;
        for(let j=0;j<max-i;j++){
            if(prods[j].price>prods[j+1].price){
                let temp = prods[j];
                prods[j]=prods[j+1];
                prods[j+1]=temp;
                flag=false
            }
        }
        if(flag){
            break;
        }
    }
    let product_names = [];
    for (let i=0; i<prods.length; i+=1) {
        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true && (prods[i].organic == true))){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "Organic") && (prods[i].organic == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)&& (prods[i].organic == true)){
            product_names.push(prods[i].name);
        }
        else if (restriction == "None"){
            product_names.push(prods[i].name);
        }

    }
    return product_names;
}

function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}