let num = [2, 15, 7, 10]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(15)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor esta na posicao ${pos}`)
}