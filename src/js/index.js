function slider() {
  var swiper = new Swiper(".sobreClubeLeveros__discover__slider", {
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function setHeightOnCards() {
  const cards = document.querySelectorAll(
    ".sobreClubeLeveros__discover__slider .swiper-slide"
  );
  let highestHeightValue = 0;

  cards.forEach((card) => {
    if (card.offsetHeight > highestHeightValue) {
      highestHeightValue = card.offsetHeight;
    }
  });

  cards.forEach((card) => {
    card.style.height = highestHeightValue + "px";
  });
}

// Função para criar observer de scroll
function createScrollObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Elemento aparece quando 10% dele está visível
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
        observer.unobserve(entry.target); // Para de observar após adicionar a classe
      }
    });
  }, options);

  return observer;
}

if (innerWidth < 1024) slider();

document.addEventListener('DOMContentLoaded', function( ) {
    const headerImage = document.querySelector(
      ".sobreClubeLeveros__header picture img"
    );
    const divText = document.querySelector(".sobreClubeLeveros__header__textDiv");

    const title = document.querySelector(".sobreClubeLeveros__discover__title");
    const hr = document.querySelector(".sobreClubeLeveros__discover__hr");
    const slider = document.querySelector(".sobreClubeLeveros__discover__slider");

    if (headerImage) {
      setTimeout(() => {
        headerImage.classList.add("loaded");
        divText.classList.add("loaded");
      }, 100);
    }

    const scrollObserver = createScrollObserver();

    if (title) scrollObserver.observe(title);
    if (hr) scrollObserver.observe(hr);
    if (slider) scrollObserver.observe(slider);

    setTimeout(() => {
      setHeightOnCards();
    }, 500);


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
});