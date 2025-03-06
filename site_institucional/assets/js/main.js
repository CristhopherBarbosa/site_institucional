// main.js

const translations = {
  pt: {
    'menu.ciencia': 'A Ciência',
    'menu.aplicacoes': 'Aplicações',
    'menu.instituicao': 'A Instituição',
    'menu.noticias': 'Notícias',
    'menu.contato': 'Contato',
    'button.saiba_mais': 'Saiba mais',
    'header.titulo': 'MitLab - Produção de Energia Elétrica através de Mitocôndrias',
    'section.ciencia': 'Exploração detalhada de como as mitocôndrias convertem nutrientes em energia elétrica...',
    'section.aplicacoes': 'Potencial para energia sustentável, dispositivos médicos e nanotecnologia...',
    'section.instituicao': 'Nossa missão, visão e os projetos desenvolvidos...',
    'section.noticias': 'Últimas atualizações sobre pesquisas, conferências e publicações...',
    'section.contato': 'Informações de contato e localização...'
  },
  en: {
    'menu.ciencia': 'Science',
    'menu.aplicacoes': 'Applications',
    'menu.instituicao': 'Institution',
    'menu.noticias': 'News',
    'menu.contato': 'Contact',
    'button.saiba_mais': 'Learn more',
    'header.titulo': 'MitLab - Electrical Energy Production through Mitochondria',
    'section.ciencia': 'Detailed exploration of how mitochondria convert nutrients into electrical energy...',
    'section.aplicacoes': 'Potential for sustainable energy, medical devices, and nanotechnology...',
    'section.instituicao': 'Our mission, vision, and developed projects...',
    'section.noticias': 'Latest updates on research, conferences, and publications...',
    'section.contato': 'Contact information and location...'
  }
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Site carregado!");
  
  // Alternar idioma
  const languageSelector = document.getElementById("language-selector");

  function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }

  languageSelector.addEventListener("change", function () {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    updateLanguage(selectedLang);
  });

  // Carregar idioma salvo
  const savedLanguage = localStorage.getItem("selectedLanguage") || "pt";
  languageSelector.value = savedLanguage;
  updateLanguage(savedLanguage);

  // Add interactivity for buttons and enhance user experience
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate background image
  function animateBackground() {
    const background = document.querySelector('.background-image');
    let position = 0;
    setInterval(() => {
      position -= 1;
      background.style.backgroundPosition = `${position}px 0`;
    }, 30);
  }

  animateBackground();

  i18next
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
      fallbackLng: 'en',
      backend: {
        loadPath: '/locales/{{lng}}/translation.json'
      }
    }, function(err, t) {
      updateContent();
    });

  function changeLanguage(lng) {
    i18next.changeLanguage(lng, updateContent);
  }

  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
      element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
    });
  }

  document.querySelectorAll('.flag-icon').forEach(function(flag) {
    flag.addEventListener('click', function() {
      changeLanguage(this.alt.toLowerCase());
    });
  });
});