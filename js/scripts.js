const form = document.getElementById("form")
const button = document.getElementById("button")
const range = document.getElementById("range")
const buttonBuscaProduto = document.getElementById("buscaProduto")

function loadAlert() {
    alert("JavaScript carregado")
}

// buttonBuscaProduto.addEventListener("click", ()=>{
//     getProducts();
// })


function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('lista_produtos');

            // Itera sobre os produtos e os adiciona à lista
            data.products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>Descrição: ${product.description}</p>
                    <p>Preço: $${product.price}</p>
                    <p>Desconto: ${product.discountPercentage}%</p>
                    <p>Avaliação: ${product.rating}</p>
                    <p>Estoque: ${product.stock}</p>
                    <p>Marca: ${product.brand}</p>
                    <p>Categoria: ${product.category}</p>
                    <img src="${product.thumbnail}" alt="Thumbnail do produto">
                `;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os produtos:', error);
        });
}

document.addEventListener('DOMContentLoaded', getProducts)



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json))

