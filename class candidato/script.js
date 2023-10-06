class Candidato{
    constructor (nomeCandidato, idadeCandidato, profissaoCandidato, teleCandidato, enderecoCandidato, cidadeCandidato){
        this.nomeCandidato = nomeCandidato
        this.idadeCandidato = idadeCandidato
        this.profissaoCandidato = profissaoCandidato
        this.teleCandidato = teleCandidato
        this.enderecoCandidato = enderecoCandidato
        this.cidadeCandidato = cidadeCandidato
    }  
}
function dados(){
        let c1_nome = window.prompt('qual o seu nome?')
        let c1_idade = window.prompt('qual a sua idade?')
        let c1_profissão = window.prompt('qual a sua profissão?')
        let c1_fone = window.prompt('qual o seu telefone?')
        let c1_endereço = window.prompt('qual o seu endereço?')
        let c1_cidade = window.prompt('qual a sua cidade?')

        let Candidato1 = new Candidato(c1_nome,c1_idade,c1_profissão,c1_fone,c1_endereço,c1_cidade)
        
        document.write(`nome: ${Candidato1.nomeCandidato}<br>`)
        document.write(`idade:${Candidato1.idadeCandidato}<br>`)
        document.write(`profissão: ${Candidato1.profissaoCandidato}<br>`)
        document.write(`fone: ${Candidato1.teleCandidato}<br>`)
        document.write(`endereço: ${Candidato1.enderecoCandidato}<br>`)
        document.write(`cidade: ${Candidato1.cidadeCandidato}<br`)
}
dados()
