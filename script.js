// Selecionando os elementos
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

// Função para alternar a classe 'show' no menu
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


// Selecionando o botão
const backToTopButton = document.getElementById('back-to-top');

// Exibe o botão quando o usuário rola para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Quando o scroll ultrapassar 200px
        backToTopButton.style.display = 'block'; // Mostra o botão
    } else {
        backToTopButton.style.display = 'none'; // Esconde o botão
    }
});

// Função para rolar até o topo suavemente
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});
