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
            spaceBetween: 400, // Adiciona um espaçamento entre slides se quiser
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
    }
    // Adicione mais produtos conforme necessário
};

function showProduct() {
    const selectedProduct = document.getElementById('productSelect').value;

    if (!selectedProduct) {
        document.getElementById('productContent').style.display = 'none';
        return;
    }

    const product = products[selectedProduct];

    // Atualizando as imagens do carrossel
    const swiperWrapper = document.getElementById('productSwiperWrapper');
    swiperWrapper.innerHTML = '';

    product.images.forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${image}" alt="Product Image">`;
        swiperWrapper.appendChild(slide);
    });

    // Atualizando a descrição
    document.getElementById('description').innerText = product.description;

    // Atualizando as características
    document.getElementById('icon1').src = product.features[0].icon;
    document.getElementById('featureText1').innerText = product.features[0].text;

    document.getElementById('icon2').src = product.features[1].icon;
    document.getElementById('featureText2').innerText = product.features[1].text;

    document.getElementById('icon3').src = product.features[2].icon;
    document.getElementById('featureText3').innerText = product.features[2].text;

    document.getElementById('productContent').style.display = 'block';

    // Inicializando ou reinicializando o novo Swiper com nome específico
    new Swiper('.product-swiper-container', {
        slidesPerView: 1,
        direction: 'horizontal', // Diferente do primeiro, por exemplo
        loop: true, // Sem loop
        autoplay: {
            delay: 3000, // 3000 ms = 3 seconds
            disableOnInteraction: false, // Keeps autoplay even after user interaction
        },
        pagination: {
            el: '.product-swiper-pagination',
            clickable: true
        },
        
        loop: true
    });
}
