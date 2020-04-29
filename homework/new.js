var products = [];


let shoppingCart = {
selectedProducts: [],
totalPrice: 0
}

var product1 = {
    id: 1,
    name: "Toaster X56 Plus",
    price: 12.98,
    stock: 105
};

var product2 = {
    id: 2,
    name: "Watch Rocker",
    price: 9.99,
    stock: 2
};

var product3 = {
    id: 3,
    name: "Microwave",
    price: 40.25,
    stock: 10
};

var product4 = {
    id: 4,
    name: "Heater",
    price: 15.33,
    stock: 6
};

products.push(product1, product2, product3, product4);

function addToShoppingCart(id){
    for (i = 0; i < products.length; i++){
    if ( products[i].id === id){
        shoppingCart.selectedProducts.push(products[i]);
        name = products[i].name;
        shoppingCart.totalPrice += products[i].price;
    }
    }

}

function removeFromShoppingCart(id){
    for(i =0; i < shoppingCart.selectedProducts.length; i++){
        if ( shoppingCart.selectedProducts[i].id === id ){
          index = shoppingCart.selectedProducts.indexOf(shoppingCart.selectedProducts[i]);
          shoppingCart.totalPrice -= shoppingCart.selectedProducts[i].price;
          shoppingCart.selectedProducts.splice(index,1);
          
        }
    }
    
}

function shop(){
    let array = shoppingCart.selectedProducts;
    let shoppingPrice = 0;
    
    
    for(i = 0; i < array.length; i++){
      shoppingPrice += array[i].price;
      
    }
    
    shoppingCart.totalPrice = 0;
    array.splice(0,array.length)
    return shoppingPrice;
}



//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));





