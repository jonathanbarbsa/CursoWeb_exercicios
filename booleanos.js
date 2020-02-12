//Boolean: Dado primitivo que possui dois valores como 0 ou 1 e VERDADEIRO ou FALSO

let isAtivo = false // Let é uma variável e isAtivo uma função.
console.log(isAtivo) 

isAtivo = true 
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

console.log('os verdadeiros...') // Abaixo estão todos os verdadeiros.
console.log(!!3) // !! = negação duas vezes. 
console.log(!!-1)
console.log(' ')
console.log(!![]) // Mesmo o Array vazio ele representa o valor verdadeiro.
console.log(!!{}) // {} <= Objeto
console.log(!! Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia é falsa.
console.log(!!null)
console.log(!!NaN)
console.log(undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //  || → Significa OU
let nome = 'Davi Lucca'
console.log(nome || 'Desconhecido')

// Comentario para testar o git!