// tipso de dados
// booleanos

// conversão implicita
const numero = 456
const numeroString = '456'

console.log(numero === numeroString) // false
console.log(numero == numeroString) // true
console.log(numero + numeroString) // 456456 (o número vira string e é concatenado)

// conversão explicita (Number) | (String)

console.log(numero + Number(numeroString))