//fundo botão

var menuItem = document.querySelectorAll('.item-menu')

function selecionarlink(){
    menuItem.forEach((item)=> item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item)=>item.addEventListener('click',selecionarlink))





//retrair menu

var btnExp = document.querySelector('#btn-exp')
var menuretratil = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuretratil.classList.toggle('expandir')
})