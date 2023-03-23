// parâmetros de função
function soma(num1, num2){
    return num1 + num2
}

//console.log(soma(2, 2))

// parâmetros x argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}. Minha idade é ${idade} anos.`
}

//console.log(nomeIdade('Ígor', 19))

function multiplicacao(num1 = 1, num2 = 1){
    return num1 * num2
}

//console.log(multiplicacao(soma(4, 5), soma(3, 3)))

console.log(multiplicacao(soma(4, 5)))