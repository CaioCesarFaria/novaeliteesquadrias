// Menu hamburguer


const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000, // 3000 ms = 3 seconds
        disableOnInteraction: false, // Keeps autoplay even after user interaction
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next-inicio', // Correspondendo à classe HTML
        prevEl: '.swiper-button-prev-inicio', // Correspondendo à classe HTML
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },


});


const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    
    direction: 'horizontal', // Diferente do primeiro, por exemplo
    loop: true, // Sem loop
    
    autoplay: {
        delay: 3000, // 3000 ms = 3 seconds
        disableOnInteraction: false, // Keeps autoplay even after user interaction
    },
    pagination: {
        el: '.swiper2-pagination',
        clickable: true,
    },

    breakpoints: {
        1201: {
            slidesPerView: 1, // 1 slide por vez em telas maiores
            spaceBetween: 100, // Adiciona um espaçamento entre slides se quiser
        }
    }
});


// CARROSSEL E DROP LIST DA PÁGINA DE PRODUTOS

// scripts.js

const products = {
    pivotantes: {
        
        images: [
            '/assets/carrossel/prod_portapivotante.png',
            
        ],
        description: '<strong>Portas Pivotantes</strong> <br>As portas pivotantes são ideais para entradas principais, oferecendo um design elegante e imponente. Com um eixo vertical de rotação, permitem uma abertura ampla e marcante, combinando estética moderna com robustez. Fabricadas em alumínio, garantem durabilidade e leveza.',
        features: [
            { icon: '/assets/droplist/icon_piv_1.png', text: 'Imponente' },
            { icon: '/assets/droplist/icon_piv_2.png', text: 'Robusta' },
            { icon: '/assets/droplist/icon_piv_3.png', text: 'Abertura Suave' }
        ]
    },
    janelasPortasDeCorrer: {
        
        images: [
            '/assets/carrossel/prod_janelaseportasdecorrer.svg',
            
        ],
        description: '<strong>Portas e Janelas de correr</strong> <br>Portas e janelas de correr são práticas para otimizar espaços. Suas folhas deslizantes garantem abertura sem ocupar área útil, oferecendo ampla entrada de luz. Esquadrias de alumínio proporcionam resistência e leveza.',
        features: [
            { icon: '/assets/droplist/icon_correr_1.png', text: 'Compactada' },
            { icon: '/assets/droplist/icon_correr_2.png', text: 'Elegante' },
            { icon: '/assets/droplist/icon_correr_3.png', text: 'Reforçada' }
        ]
    },
    persianas: {
        images: [
            '/assets/carrossel/prod_persianasintegradas.png',
            
            
        ],
        description: '<strong>Persianas Integradas</strong> <br>Persianas integradas controlam luz e ventilação com praticidade. Integradas às esquadrias de alumínio, otimizam o isolamento térmico e acústico. Com opções manuais ou motorizadas, oferecem funcionalidade e estética limpa.',
        features: [
            { icon: '/assets/droplist/icon_persiana_1.png', text: 'Funcional' },
            { icon: '/assets/droplist/icon_persiana_2.png', text: 'Tecnológica' },
            { icon: '/assets/droplist/icon_persiana_3.png', text: 'Discreta' }
        ]
    },
    maximAr: {
        images: [
            '/assets/carrossel/prod_maximar.png',
            
        ],
        description: '<strong>Janelas Maxim-ar</strong> <br>As janelas Maxim-ar oferecem ventilação eficiente com abertura parcial. Quando combinadas a um painel fixo, proporcionam um visual contínuo, alinhando-se discretamente quando fechadas. São ideais para garantir a aeração sem comprometer o design da fachada.',
        features: [
            { icon: '/assets/droplist/icon_maxim_1.png', text: 'Ventilado' },
            { icon: '/assets/droplist/icon_maxim_2.png', text: 'Discreto' },
            { icon: '/assets/droplist/icon_maxim_3.png', text: 'Convencional' }
        ]
    },
    fachadasPeleDeVidro: {
        images: [
            '/assets/carrossel/prod_peledevidro.png',
            
        ],
        description: '<strong>Fachadas em Pele de Vidro</strong> <br>As fachadas pele de vidro são conhecidas por seu design moderno e elegante, com grandes superfícies envidraçadas que proporcionam ampla entrada de luz natural. Uma das principais características é o fato de os perfis de alumínio ficarem ocultos, resultando em um visual limpo e sofisticado.',
        features: [
            { icon: '/assets/droplist/icon_fachadas_1.png', text: 'Controle Térmico e Luminoso' },
            { icon: '/assets/droplist/icon_fachadas_2.png', text: 'Design Moderno' },
            { icon: '/assets/droplist/icon_fachadas_3.png', text: 'Durável' }
        ]
    },
    portasdeGiro: {
        images: [
            '/assets/carrossel/prod_portadegiro.png',
            
        ],
        description: '<strong>Porta de Giro</strong> <br>Portas de giro são versáteis e tradicionais, com abertura lateral em dobradiça. Feitas de alumínio, garantem resistência e são ideais para ambientes internos e externos, proporcionando uma estética moderna e funcional.',
        features: [
            { icon: '/assets/droplist/icon_giro_1.png', text: 'Prática' },
            { icon: '/assets/droplist/icon_giro_2.png', text: 'Adaptável' },
            { icon: '/assets/droplist/icon_giro_3.png', text: 'Resistente' }
        ]
    },
    paineisFixos: {
        images: [
            '/assets/carrossel/prod_fixos.svg',
            
        ],
        description: '<strong>Painéis Fixos</strong> <br>Painéis fixos em alumínio são ideais para quem busca iluminação natural sem a necessidade de abertura. Com design minimalista, são resistentes e duráveis, oferecendo estética moderna em fachadas e interiores.',
        features: [
            { icon: '/assets/droplist/icon_fixos_1.png', text: 'Minimalista' },
            { icon: '/assets/droplist/icon_fixos_2.png', text: 'Tradicional' },
            { icon: '/assets/droplist/icon_fixos_3.png', text: 'Estrutura Firme' }
        ]
    },
    guardaCorpos: {
        images: [
            '/assets/carrossel/prod_guardacorpo.png',
            
        ],
        description: '<strong>Guarda-Corpo</strong> <br>Guarda-Corpo em alumínio combinam segurança e design. Ideais para varandas e escadas, são resistentes à corrosão e podem ser combinados com vidro, oferecendo leveza e transparência sem comprometer a segurança.',
        features: [
            { icon: '/assets/droplist/icon_corpo_1.png', text: 'Seguro' },
            { icon: '/assets/droplist/icon_corpo_2.png', text: 'Estético' },
            { icon: '/assets/droplist/icon_corpo_3.png', text: 'Fortificado' }
        ]
    },

    // Adicione mais produtos conforme necessário
};

function createProductHTML(productKey, productData) {
    let swiperSlides = '';
    productData.images.forEach(image => {
        swiperSlides += `<div class="swiper-slide unique-swiper-slide"><img src="${image}" alt="${productData.title}"></div>`;
    });

    return `
        <div class="unique-product">
            <div class="unique-content-row">
                <div class="unique-swiper-container">
                    <div class="swiper-wrapper">
                        ${swiperSlides}
                    </div>
                    <div class="swiper-pagination unique-swiper-pagination-${productKey}"></div>
                </div>
                <div class="unique-description">
                    <p>${productData.description}</p>
                </div>
            </div>
            <div class="unique-features-row">
                ${productData.features.map(f => `
                    <div class="unique-feature">
                        <img src="${f.icon}" alt="${f.text}">
                        <p>${f.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
function insertCatalogOption() {
    const dropdownList = document.querySelector('.dropdown-list');
    const catalogOption = dropdownList.querySelector('[data-value="catalogo"]');

    // Se a opção "Catálogo de Produtos" ainda não existe, insira-a no início
    if (!catalogOption) {
        const catalogItem = document.createElement('li');
        catalogItem.setAttribute('data-value', 'catalogo');
        catalogItem.textContent = 'Catálogo de Produtos';

        // Adiciona a opção ao topo da lista
        dropdownList.insertBefore(catalogItem, dropdownList.firstChild);

        catalogItem.addEventListener('click', function() {
            document.querySelector('.dropdown-button').innerHTML = 'Catálogo de Produtos' + '<img src="./assets/icon_down.png">';
            showAllProducts(); // Exibe todos os carrosseis
        
            // Esconde a lista após a seleção
            document.querySelector('.dropdown-list').style.display = 'none';
        });
        
    }
}

function showAllProducts() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; // Limpar o container antes de exibir os produtos

    for (const [key, value] of Object.entries(products)) {
        productsContainer.innerHTML += createProductHTML(key, value);
    }
    
    // Inicializando os carrosseis Swiper com identificadores únicos
    document.querySelectorAll('.unique-swiper-container').forEach((swiperContainer, index) => {
        const productKey = Object.keys(products)[index];
        new Swiper(swiperContainer, {
            slidesPerView: 1,
            effect: "fade",
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: swiperContainer.querySelector(`.unique-swiper-pagination-${productKey}`), // Paginação específica para o produto
                clickable: true,
            }
        });
    });
}

function showProduct() {
    const selectedProduct = document.querySelector('.dropdown-list li.selected')?.getAttribute('data-value');
    
    // Se "Catálogo de Produtos" for selecionado, mostra todos os carrosséis
    if (!selectedProduct || selectedProduct === 'catalogo') {
        showAllProducts();
        return;
    }

    // Caso contrário, exibe o produto selecionado
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = createProductHTML(selectedProduct, products[selectedProduct]);

    // Inicializa o Swiper do produto selecionado
    new Swiper('.unique-swiper-container', {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: `.unique-swiper-pagination-${selectedProduct}`,
            clickable: true,
        }
    });
}

// Listener para dropdown
document.querySelectorAll('.dropdown-list li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.dropdown-button').innerHTML = this.textContent + '<img src="./assets/icon_down.png">';
        document.querySelectorAll('.dropdown-list li').forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');

        const selectedProduct = this.getAttribute('data-value');

        // Se um produto específico for selecionado, insere a opção "Catálogo de Produtos"
        if (selectedProduct !== 'catalogo') {
            insertCatalogOption();
        }

        showProduct(); // Exibe o produto selecionado

        // Esconde a lista após a seleção
        document.querySelector('.dropdown-list').style.display = 'none';
    });
});

document.querySelector('.dropdown-button').addEventListener('click', function() {
    const dropdownList = document.querySelector('.dropdown-list');
    
    // Mostra ou oculta a lista
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});

showAllProducts(); // Exibir todos os produtos por padrão