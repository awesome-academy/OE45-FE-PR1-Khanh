let listProduct = document.querySelector('.product__item')

let productHotApi = 'http://localhost:3000/product'

function start(){
    getProduct(products => console.log(products))
}

start()

function getProductHot(product){
    fetch(productApi)
        .then(response => response.json())
        .then(product)
}