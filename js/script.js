// Lista de produtos
ofertas = document.querySelectorAll('.ofertas')

ofertas.forEach(sectionOfertas => {
    for (let i in produtos) {
        let produto = produtos[i]

        let card =
            `<div class="card">
            <img class="card-img-top" src="${'assets/img/' + produto.image}" alt="${produto.name}">
            <div class="card-body">
                <h5 class="card-title"><strong>${produto.name}</strong></h5>
                <h5 class="card-text"><small class="text-muted">R$ <s> ${produto.oldprice}></s></small> Por R$ ${produto.price}</h5>
            </div>
            <div class="card-footer bg-transparent border-top-light-custom text-center">
                <button class="btn btn-primary text-white btn-sm m-1 btn-block" onclick='adicionarProduto(${produto.id})'>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> Adicionar ao Carrinho
                  </button>
                </div>
            </div>`
        sectionOfertas.innerHTML += card
    }
})

// Add produto ao carrinho
function adicionarProduto(id) {
    localStorage.setItem('produto' + id, id)
}

function listarProdutosCarrinho() {
    var listaProdutosCarrinho = document.querySelector('.tbl-carrinho')
    listaProdutosCarrinho.innerHTML = ""

    let keys = Object.keys(localStorage)

    if (keys.length > 0) {
        keys.forEach(function (k) {
            let id = localStorage.getItem(k)
            
            produtos.filter((p) => {
                if (p.id === parseInt(id)) {
                    let linha = listaProdutosCarrinho.insertRow()

                    linha.insertCell(0).innerHTML = p.name
                    linha.insertCell(1).innerHTML = 1
                    linha.insertCell(2).innerHTML = `R$ ${p.price}`
                    linha.insertCell(3).innerHTML = 1 * p.price
                }
            })

        })
    }
}