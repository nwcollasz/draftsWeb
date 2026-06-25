
const botaoTema = document.querySelector('.btn');

botaoTema.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('dark-theme')) {
        botaoTema.textContent = "Dark";
    } else {
        botaoTema.textContent = "Light";
    }
});