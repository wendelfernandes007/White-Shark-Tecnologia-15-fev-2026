document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('Home');
    const navList = document.querySelector('Soluções');
   
    // Toggle menu para o hambúrguer
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times'); // Ícone X para fechar

        });

    }

    // Animação de scroll suave para links internos (opcional, mas bom para UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const portfolioContainer = document.querySelector('.portfolio-container');

function scrollPortfolio() {
    // Se chegar no fim, volta ao início
    if (portfolioContainer.scrollLeft + portfolioContainer.offsetWidth >= portfolioContainer.scrollWidth) {
        portfolioContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        portfolioContainer.scrollBy({ inset-inline-start: 320, behavior: 'smooth' });
    }
}

// Roda automaticamente a cada 5 segundos
setInterval(scrollPortfolio, 5000);

.carousel-container {   
    inline-size: 100%;
    overflow-x: auto; /* Permite arrastar para o lado no mobile */
    padding: 20px 0;
    background: #f9f9f9;
}

.carousel-track {
    display: flex;
    gap: 30px; /* Espaço entre os itens */
    padding: 0 20px;
}

.carousel-item {
    flex: 0 0 250px; /* No Desktop, cada item tem 250px */
    text-decoration: none;
    text-align: center;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.carousel-item:hover {
    transform: translateY(-5px); /* Efeito de levante ao passar o mouse */
}

.carousel-item img {
    inline-size: 100%;
    height: 150px;
    object-fit: contain; /* Não distorce a logo/print do site */
    margin-block-end: 10px;
}

.carousel-item span {
    color: #333;
    font-weight: bold;
    font-size: 14px;
}

/* AJUSTE PARA MOBILE */
@media (max-width: 768px) {
    .carousel-item {
        flex: 0 0 180px; /* Itens menores no celular para caberem melhor */
    }
}

<script>
    window.onload = function() {
        const track = document.getElementById('track');
        
        // Clonamos o conteúdo original
        const content = track.innerHTML;
        
        // Adicionamos o clone ao final para criar o efeito infinito
        track.innerHTML += content;

        // Se a sua tela for muito larga (monitores UltraWide), 
        // duplicamos mais uma vez por segurança para não ver o branco
        if (track.offsetWidth < (window.innerWidth * 2)) {
            track.innerHTML += content;
        }
    };
</script>