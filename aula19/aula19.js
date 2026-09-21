function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')

    if(ini.value.lenghth == 0 || fim.value.lenghth == 0 || passo.value.lenghth == 0) {res.innerHTML = 'Impossível contar!'

    } else {
    res.innerHTML = 'Contador: </br>'
    //pegando os valores das varriáveis e convertendo para número
    let i =Number(ini.value)
    let f =Number(fim.value)
    let p =Number(passo.value)
   if(p <= 0) {
    alert('Passo inválido! Considerando Passo 1')
    p=1
   }
   if (1 < f) {
    //CONTA CRESCENTE 
    //SITE PARA EMOJIS https://unicode.org/org/emoji/charts/full-emoji-list.html

    for(let c = i; c <= f; c += p) {
        //testa recebe o valor de C e o EMOJI DE SETA
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
   } else {
    //conta regressiva
    for(res.innerHTML += `${c} \u{1F449}`){ 
res.innerHTML =+ `\u{1F3C1}`
    }
}
}
}
