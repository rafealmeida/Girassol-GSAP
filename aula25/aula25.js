let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Valor ${num.value} adicionado.'
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            }
        }
    }
    function finalizar() {
    if (valores.length == 0) { //SE a LISTA de valores estiver VAZIA
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //TOTAL de elemento no VETOR
        let maior = valores[0] //MAIOR VALOR, começa com o primeiro valor da lista
        let menor = valores[0] //MENOR VALOR, começa com o primeiro valor da lista
        let soma = 0 //SOMA DOS VALORES, começa com 0
        let media = 0 //MEDIA DOS VALORES, começa com 0

        for (let pos in valores) { //para cada posicao em valores
            soma += valores[pos] //soma os valores

            if (valores[pos] > maior) //se o valor da posição for maior que o maior
                maior = valores[pos] //o maior recebe o valor da posição

            if (valores[pos] < menor) //se o valor da posição for menor que o menor
                menor = valores[pos] //o menor recebe o valor da posição
        }

        //MOSTRA OS RESULTADOS FINAIS DA LISTA
        media = soma / tot //CALCULA A MÉDIA

        res.innerHTML = '' //LIMPAR O resultado anterior
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
} 