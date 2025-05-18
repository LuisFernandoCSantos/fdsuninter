var botao = document.getElementById('botao')
var mensagem = document.getElementsByClassName('mensagem')
var mensagemcriada = false; // controlando se já criou a mensagem

botao.addEventListener("click",function() {
    if (mensagemcriada === false) {
        var novamensagem = document.createElement('p');
        novamensagem.textContent = '"Ninguém é tão alguém, que nunca precisou de alguém!"';
        mensagem[0].appendChild(novamensagem);
        mensagemcriada = true; // depois de clicar uma vez, não clicar de novo
    }
    
})