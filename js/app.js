class Produto {
	constructor(descricao, quantidade, valor) {
		this.descricao = descricao
		this.quantidade = quantidade
		this.valor = valor
		
	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
	}
}

class DB {

	getTotalRegistros() {
		let keys = Object.keys(localStorage)
		let itens = keys.filter(d => d.includes('loja_'));
		return itens.length
	}

	itemJaAdicionado(id) {
		let itens = Object.fromEntries(Object.entries(localStorage).filter(([key]) => key.includes('loja_')))
	
			for(var i in itens) {
				if(parseInt(itens[i]) === id) {
					alert('Produto já adicionado. Deseja adicionar mais unidades?')
				}
			}
	}

	gravar(item) {
		this.itemJaAdicionado(item)
		localStorage.setItem('loja_'+item, JSON.stringify(item))
	}

	recuperarTodosRegistros() {
		let totalRegistros = this.getTotalRegistros()
		let itensCarrinho = Array()

		for (let i = 1; i <= totalRegistros; i++) {
			let item = JSON.parse(localStorage.getItem('loja_'+i))
		
		if(item === null) {
			continue
		}

		itensCarrinho.push(item)
		}
		return itensCarrinho
	}
}

let bd = new DB()

function adicionarProduto(idProduto) {
	bd.gravar(idProduto)
	
	//storage
	// if(produto.validarDados()) {
	// 	bd.gravar(produto)
	// 	formataModal("Sucesso na gravação!", "Produto adicionado com sucesso!")
	// 	$('#modalAdicionaCarrinho').modal('show')
		
	// } else {
	// //dialog erro
	// 	formataModal("Erro na gravação!", "Existem campos obrigatórios vazios!", 'erro')
	// 	$('#modalAdicionaCarrinho').modal('show')
	// }
}

function formataModal(title, text, tipo) {
	document.getElementById('modalTitulo').innerHTML = title
	document.getElementById('modalTexto').innerHTML = text
	var header = document.getElementById('modalHeader')
	var button = document.getElementById('btnModal')

	if (tipo === 'erro') {
		header.className = "modal-header text-danger"
		button.className = "btn btn-danger"
		button.innerHTML = "Voltar e corrigir"
	} else {
		header.className = "modal-header text-success"
		button.className = "btn btn-success"
		button.innerHTML = "OK"
	}
}

function carregaListaProdutos(produtos = Array()) {
	produtos = bd.recuperarTodosRegistros()
	console.log(produtos)

// 	//seleciona elemento tbody
// 	let listaProdutos = document.getElementById('listaProdutosCarrinho')
// 	listaProdutos.innerHTML = ""
	
// 	//percorrer o array produtos (buscar produtos no arquivo JS)
// 	produtos.forEach(function(p) {
		
// 		//criando a linha (tr)
// 		let linha = listaProdutos.insertRow()

// 		//criar as colunas (td)
// 		linha.insertCell(0).innerHTML = p.name
// 		linha.insertCell(1).innerHTML = `R$ ${p.price}`
// 		linha.insertCell(2).innerHTML =  1
// 		linha.insertCell(3).innerHTML =  'Total'
// })

}