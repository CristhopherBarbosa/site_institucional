document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");

    const translations = {
        "pt": {
            "menu.ciencia": "A Ciência",
            "menu.aplicacoes": "Aplicações",
            "menu.instituicao": "A Instituição",
            "menu.noticias": "Notícias",
            "menu.contato": "Contato",
            "titulo.ciencia": "A Ciência por Trás da Energia Mitocondrial",
            "texto.ciencia": "Exploração detalhada de como as mitocôndrias convertem nutrientes em energia elétrica...",
            "titulo.aplicacoes": "Aplicações e Benefícios",
            "texto.aplicacoes": "Potencial para energia sustentável, dispositivos médicos e nanotecnologia...",
            "titulo.instituicao": "A Empresa/Instituição",
            "texto.instituicao": "Nossa missão, visão e os projetos desenvolvidos...",
            "titulo.noticias": "Notícias e Eventos",
            "texto.noticias": "Últimas atualizações sobre pesquisas, conferências e publicações..."
        },
        "en": {
            "menu.ciencia": "Science",
            "menu.aplicacoes": "Applications",
            "menu.instituicao": "The Institution",
            "menu.noticias": "News",
            "menu.contato": "Contact",
            "titulo.ciencia": "The Science Behind Mitochondrial Energy",
            "texto.ciencia": "Detailed exploration of how mitochondria convert nutrients into electrical energy...",
            "titulo.aplicacoes": "Applications and Benefits",
            "texto.aplicacoes": "Potential for sustainable energy, medical devices, and nanotechnology...",
            "titulo.instituicao": "The Company/Institution",
            "texto.instituicao": "Our mission, vision, and developed projects...",
            "titulo.noticias": "News and Events",
            "texto.noticias": "Latest updates on research, conferences, and publications..."
        },
        "es": {
            "menu.ciencia": "La Ciencia",
            "menu.aplicacoes": "Aplicaciones",
            "menu.instituicao": "La Institución",
            "menu.noticias": "Noticias",
            "menu.contato": "Contacto",
            "titulo.ciencia": "La Ciencia Detrás de la Energía Mitocondrial",
            "texto.ciencia": "Exploración detallada de cómo las mitocondrias convierten los nutrientes en energía eléctrica...",
            "titulo.aplicacoes": "Aplicaciones y Beneficios",
            "texto.aplicacoes": "Potencial para energía sostenible, dispositivos médicos y nanotecnología...",
            "titulo.instituicao": "La Empresa/Institución",
            "texto.instituicao": "Nuestra misión, visión y los proyectos desarrollados...",
            "titulo.noticias": "Noticias y Eventos",
            "texto.noticias": "Últimas actualizaciones sobre investigaciones, conferencias y publicaciones..."
        },
        "zh": {
            "menu.ciencia": "科学",
            "menu.aplicacoes": "应用",
            "menu.instituicao": "机构",
            "menu.noticias": "新闻",
            "menu.contato": "联系方式",
            "titulo.ciencia": "线粒体能源背后的科学",
            "texto.ciencia": "详细探索线粒体如何将营养物质转化为电能...",
            "titulo.aplicacoes": "应用与益处",
            "texto.aplicacoes": "可持续能源、医疗设备和纳米技术的潜力...",
            "titulo.instituicao": "公司/机构",
            "texto.instituicao": "我们的使命、愿景和开发的项目...",
            "titulo.noticias": "新闻和事件",
            "texto.noticias": "关于研究、会议和出版物的最新动态..."
        }
    };

    function translatePage(language) {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    languageSelector.addEventListener("change", function () {
        const selectedLanguage = this.value;
        translatePage(selectedLanguage);
    });

    translatePage("pt");
});
