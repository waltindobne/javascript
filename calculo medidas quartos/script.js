function CalcularImovel(metragem, quartos){
    //let é usada apenas no bloco que esta
    let m2 = 3000
    let preço = 0
    switch(quartos){
        case 1:
            default:
            preço = metragem * (m2*1)
            break
        case 2:
            preço = metragem * (m2*1.2)
            break       
        case 3:
            preço = metragem * (m2*1.5)  
            break   
        case 4: 
            window.alert('não disponivel')
            break
    }
    return preço
}

metragem = parseFloat(window.prompt('Digite quantos metros quadrados tem:'));
quartos = parseFloat(window.prompt('Digite quantos quartos tem:'));
let precoImovel = CalcularImovel(metragem, quartos);
console.log(`O preço do imóvel é ${precoImovel}`);