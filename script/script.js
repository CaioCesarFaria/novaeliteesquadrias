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
            '/assets/droplist/pivotante_1.png',
            '/assets/droplist/pivotante_2.png',
            '/assets/droplist/pivotante_3.png',
            '/assets/droplist/pivotante_4.png'
        ],
        description: 'As portas pivotantes são ideais para entradas principais, oferecendo um design elegante e imponente. Com um eixo vertical de rotação, permitem uma abertura ampla e marcante, combinando estética moderna com robustez. Fabricadas em alumínio, garantem durabilidade e leveza.',
        features: [
            { icon: '/assets/droplist/icon_piv_1.png', text: 'Sofisticação' },
            { icon: '/assets/droplist/icon_piv_2.png', text: 'Abertura Suave' },
            { icon: '/assets/droplist/icon_piv_3.png', text: 'Funcionalidade' }
        ]
    },
    janelasPortasDeCorrer: {
        
        images: [
            '/assets/droplist/correr_1.png',
            '/assets/droplist/correr_2.png',
            '/assets/droplist/correr_3.png',
            '/assets/droplist/correr_4.png'
        ],
        description: 'Portas e janelas de correr são práticas para otimizar espaços. Suas folhas deslizantes garantem abertura sem ocupar área útil, oferecendo ampla entrada de luz. Esquadrias de alumínio proporcionam resistência e leveza.',
        features: [
            { icon: '/assets/droplist/icon_correr_1.png', text: 'Otimização de espaço' },
            { icon: '/assets/droplist/icon_correr_2.png', text: 'Praticidade' },
            { icon: '/assets/droplist/icon_correr_3.png', text: 'Versatilidade' }
        ]
    },
    persianas: {
        images: [
            '/assets/droplist/persiana_1.png',
            '/assets/droplist/persiana_2.png',
            '/assets/droplist/persiana_3.png',
            
        ],
        description: 'Portas e janelas de correr são práticas para otimizar espaços. Suas folhas deslizantes garantem abertura sem ocupar área útil, oferecendo ampla entrada de luz. Esquadrias de alumínio proporcionam resistência e leveza.',
        features: [
            { icon: '/assets/droplist/icon_persiana_1.png', text: 'Controle de Luz' },
            { icon: '/assets/droplist/icon_persiana_2.png', text: 'Privacidade' },
            { icon: '/assets/droplist/icon_persiana_3.png', text: 'Inovação' }
        ]
    },
    maximAr: {
        images: [
            '/assets/droplist/maximAr_1.png',
            '/assets/droplist/maximAr_2.png',
            '/assets/droplist/maximAr_3.png',
            '/assets/droplist/maximAr_4.png'
        ],
        description: 'As janelas Maxim-ar oferecem ventilação eficiente com abertura parcial. Quando combinadas a um painel fixo, proporcionam um visual contínuo, alinhando-se discretamente quando fechadas. São ideais para garantir a aeração sem comprometer o design da fachada.',
        features: [
            { icon: '/assets/droplist/icon_maxim_1.png', text: 'Ventilação' },
            { icon: '/assets/droplist/icon_maxim_2.png', text: 'Praticidade' },
            { icon: '/assets/droplist/icon_maxim_3.png', text: 'Versatilidade' }
        ]
    },
    fachadasPeleDeVidro: {
        images: [
            '/assets/droplist/fachadas_1.png',
            '/assets/droplist/fachadas_2.png',
            '/assets/droplist/fachadas_3.png',
            '/assets/droplist/fachadas_4.png'
        ],
        description: 'As fachadas pele de vidro são conhecidas por seu design moderno e elegante, com grandes superfícies envidraçadas que proporcionam ampla entrada de luz natural. Uma das principais características é o fato de os perfis de alumínio ficarem ocultos, resultando em um visual limpo e sofisticado. Além de sua estética, essa solução garante excelente isolamento acústico e térmico.',
        features: [
            { icon: '/assets/droplist/icon_fachadas_1.png', text: 'luminosidade' },
            { icon: '/assets/droplist/icon_fachadas_2.png', text: 'Design Moderno' },
            { icon: '/assets/droplist/icon_fachadas_3.png', text: 'Elegância' }
        ]
    }
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
    
    if (!selectedProduct) {
        showAllProducts(); // Mostra todos se nenhum estiver selecionado
        return;
    }

    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = createProductHTML(selectedProduct, products[selectedProduct]);

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
        document.querySelector('.dropdown-button').textContent = this.textContent;
        document.querySelectorAll('.dropdown-list li').forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');
        showProduct();
    });
});

document.querySelector('.dropdown-button').addEventListener('click', function() {
    const dropdownList = document.querySelector('.dropdown-list');
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
});

showAllProducts(); // Exibir todos os produtos por padrão