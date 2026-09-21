function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''//limpa a tabuada antes de gerar uma nova
        while(c <= 10){
            //cria o elemento option para cada resultado da tabuada
            let item = document.createElement('option')
                //atribui o texto do item com a multiplicação e o resultado
                item.text
        }
    }

}