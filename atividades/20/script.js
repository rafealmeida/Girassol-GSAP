function idade () {
    let idade = Number(window.prompt('Digite a sua idade: '))

    if (idade >= 18) {
        window.alert('Você é maior de idade.')
    } else {
        window.alert('Você é menor de idade.')
    }
}