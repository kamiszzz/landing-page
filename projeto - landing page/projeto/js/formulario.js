const botaoForm = document.querySelector('.conteudo-principal-escrito-botao')
const form = document.querySelector('.formulario-inscricao')

botaoForm.addEventListener('click', () => {
    form.classList.toggle('formulario-inscricao--ativo')
})