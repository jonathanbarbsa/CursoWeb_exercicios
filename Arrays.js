// Array: É uma forma de agrupar múltiplos valores em uma estrutura só a partir de um único valor e e é representado por []
const valores = [7.7, 8.9, 6.3, 9.2] // comçamos a contar do 0, exemplo: 0, 1,2,3...
console.log(valores[0], valores[3])
console.log(valores[4]) //Elemento 4 não gera resultados

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Push: Função para adicionar novos elementos no Array.
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log (typeof valores)

