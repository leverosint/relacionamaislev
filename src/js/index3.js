function slider() {
    var swiper = new Swiper(".relatesLeveros__classification__comparisons__plans", {
        slidesPerView: "auto",
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

if (innerWidth < 1024) slider()

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
    // Header elements - aparecem no load
    const headerImage = document.querySelector('.relatesLeveros__header__bg');
    const logo = document.querySelector('.relatesLeveros__header__logo');
    const headerText = document.querySelector('.relatesLeveros__header__text');
    const link1 = document.querySelector('.relatesLeveros__header__link1');
    const link2 = document.querySelector('.relatesLeveros__header__link2');

    // Títulos e textos de diferentes seções
    const benefitsTitle = document.querySelector('.relationshipBenefits__intro__title');
    const benefitsText = document.querySelector('.relationshipBenefits__intro__text');
    
    const classificationTitle = document.querySelector('.relatesLeveros__classification__title');
    const classificationText = document.querySelector('.relatesLeveros__classification__text');
    
    const advantagesTitle = document.querySelector('.relatesLeveros__advantages__title');
    const advantagesText = document.querySelector('.relatesLeveros__advantages__text');

    // Outros elementos
    const hrs = document.querySelectorAll('.nv-hr');
    const benefits = document.querySelector('.relationshipBenefits');
    const plans = document.querySelector('.relatesLeveros__classification__comparisons__plans');
    const cards = document.querySelectorAll('.relatesLeveros__advantages__text__cards__card');

    // Header aparece imediatamente ao carregar
    if (headerImage) {
        setTimeout(() => {
            headerImage.classList.add('loaded');
            if(logo) logo.classList.add('loaded');
            if(headerText) headerText.classList.add('loaded');
            if(link1) link1.classList.add('loaded');
            if(link2) link2.classList.add('loaded');
        }, 100);
    }

    // Criar observer para elementos que aparecem com scroll
    const scrollObserver = createScrollObserver();
    
    // Observar títulos e textos
    if(benefitsTitle) scrollObserver.observe(benefitsTitle);
    if(benefitsText) scrollObserver.observe(benefitsText);
    if(classificationTitle) scrollObserver.observe(classificationTitle);
    if(classificationText) scrollObserver.observe(classificationText);
    if(advantagesTitle) scrollObserver.observe(advantagesTitle);
    if(advantagesText) scrollObserver.observe(advantagesText);
    
    // Observar HRs
    hrs.forEach(hr => {
        if(hr) scrollObserver.observe(hr);
    });
    
    // Observar benefits e plans (animação da direita para esquerda)
    if(benefits) scrollObserver.observe(benefits);
    if(plans) scrollObserver.observe(plans);
    
    // Observar cards individuais (animação de cima para baixo)
    cards.forEach(card => {
        if(card) scrollObserver.observe(card);
    });

    // URLs para cada plataforma
    const urlDesktop = 'https://academialeveros.treynando.com.br';
    const urlMobile = 'https://www.clubeleveros.com.br/acelerarleveros';
 
    // Pega o elemento do link pelo ID que definimos
    const ctaLink = document.querySelectorAll('#cta-link' );
 
    // Função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        // Usa uma expressão regular para testar o User Agent do navegador
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if(ctaLink){
        ctaLink.forEach(element => {
            element.href = isMobileDevice() ? urlMobile : urlDesktop;
        });
    }
})