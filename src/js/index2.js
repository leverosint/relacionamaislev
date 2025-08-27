// Função para criar observer de scroll
function createScrollObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target); // Para de observar após adicionar a classe
            }
        });
    }, options);

    return observer;
}

window.addEventListener("load", () => {
    // Elemento que aparece no load
    const headerImage = document.querySelector('.acelerarLeveros__header picture img');
    
    // Elementos que aparecem com scroll
    const title = document.querySelector('.acelerarLeveros__developingFuture__title');
    const hrs = document.querySelectorAll('.nv-hr');
    const text = document.querySelector('.acelerarLeveros__developingFuture__text');
    const divTexts = document.querySelectorAll('.acelerarLeveros__developingFuture__divText');
    const link = document.querySelector('.acelerarLeveros__developingFuture__link');

    // Header aparece imediatamente ao carregar
    if (headerImage) {
        setTimeout(() => {
            headerImage.classList.add('loaded');
            title.classList.add('loaded');
            text.classList.add('loaded');
        }, 100);
    }

    // Criar observer para elementos que aparecem com scroll
    const scrollObserver = createScrollObserver();
    
    // Observar todas as HRs
    hrs.forEach(hr => {
        if(hr) scrollObserver.observe(hr);
    });
    
    // Observar todos os divTexts
    divTexts.forEach(divText => {
        if(divText) scrollObserver.observe(divText);
    });
    
    if(link) scrollObserver.observe(link);

    // URLs para cada plataforma
    const urlDesktop = 'https://academialeveros.treynando.com.br';
    const urlMobile = 'https://www.clubeleveros.com.br/acelerarleveros';
 
    // Pega o elemento do link pelo ID que definimos
    const ctaLink = document.getElementById('cta-link' );
 
    // Função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        // Usa uma expressão regular para testar o User Agent do navegador
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
 
    // Define o link (href) com base no resultado da verificação
    if (isMobileDevice() && ctaLink) {
      ctaLink.href = urlMobile;
    } else if(ctaLink) {
      ctaLink.href = urlDesktop;
    }
})