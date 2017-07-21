/*jshint esversion: 6 */
let products = [];
let id = 0;

const allProducts = ( () => {
  console.log("allProducts:", products);
});

const addProducts = ( (newObjects) => {
  products.push({
    'name' : newObjects.name,
    'price' : newObjects.price,
    'inventory' : newObjects.inventory,
    'id' : id++
  });
    console.log("products", products);
});

const productId = ( (getId) => {
  for(let i = 0; i < products.length; i++){
    if(products[i].id === getId){
      return products[i].id;
    }
  }
});

const deleteProduct = ( (getId) => {
  for(let d = 0; d < products.length; d++){
    if(products[i].id === getId){
      return products.splice(d, 1);
    }
  }
});

module.exports = {
  allProducts,
  addProducts,
  productId,
  deleteProduct
};