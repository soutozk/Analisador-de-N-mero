let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero (n){
    if (Number(n) >=1 && Number (n) <= 200 ){
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores )){
        valores.push(Number(num.value))
        let item= document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else{
        alert('valor invalido ou ja encontrado na lista.')
    }

    num.value = ''
    num.focus()
}
    function finalizar() {
        if (valores.length == 0) {
            alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor= valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
            
                if (valores[pos] > maior)
                    maior = valores [pos]
                if (valores[pos] < menor)
                    menor = valores [pos]
            }
            media= soma / tot
            resultado.innerHTML = ''
            resultado.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
            resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
            resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
            resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
            resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
        }
    }

