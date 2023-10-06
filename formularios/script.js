function MostrarDados(){
    const nome = String(document.getElementById('nome').value)
    const idade = Number(document.getElementById('idade').value)
    const cpf = String(document.getElementById('cpf').value)

    document.querySelector('.mostra').innerHTML=`cadastro: ${nome} tem CPF: ${cpf} e ${idade} anos`
}