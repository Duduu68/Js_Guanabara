let valores = [8, 10, 5, 2]

// for (pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

