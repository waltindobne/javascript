function CalcularImovel(metragem, quartos){
    //let é usada apenas no bloco que esta
    metragem = parseFloat(document.getElementById('metragem').value)
    quartos = parseFloat(document.getElementById('quartos').value)
    m2 = parseFloat(document.getElementById('m2-preço').value)
    numAp = parseFloat(document.getElementById('numero-andar').value)

    let casa = document.getElementById('casa').checked
    let apartamento = document.getElementById('apartamento').checked
    if(casa){
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
    }
    if(apartamento){
        if(numAp==0){
            numAp = 1
        }
        switch(quartos){
            case 1:
                default:
                preço = (metragem * (m2*1))+(numAp*15000)
                break
            case 2:
                preço = (metragem * (m2*1.2))+(numAp*15000)
                break       
            case 3:
                preço = (metragem * (m2*1.5))+(numAp*15000)
                break   
            case 4: 
                window.alert('não disponivel')
                break
            }
    }
    return resultado.innerHTML = `<br> preço: R$ ${preço.toFixed(2)}`
}
