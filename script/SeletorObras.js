// Dados das obras
const obras = {
    residencial: [
        { nome: 'Sunflower 01', img: '../assets/portfolio/residencial/Sunflower_1/res_01_capa.png' },
        { nome: 'Sunflower 02', img: 'link_da_imagem2' },
        // Continue para todas as 24 obras...
    ],
    predial: [
        { nome: 'Edifício Gênesis', img: 'link_da_imagem3' },
        
    ],
    comercial: [
        { nome: 'Coco Bambu', img: 'link_da_imagem7' },
        
    ]
};

// Função para exibir o portfólio de acordo com a categoria
function showPortfolio(tipo) {
    const container = document.getElementById('portfolio_obras');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    obras[tipo].forEach(obra => {
        const obraDiv = document.createElement('div');
        
        const obraImg = document.createElement('img');
        obraImg.src = obra.img;
        obraDiv.appendChild(obraImg);
        
        const obraNome = document.createElement('p');
        obraNome.textContent = obra.nome;
        obraDiv.appendChild(obraNome);

        container.appendChild(obraDiv);
    });
}


// Carregar automaticamente as obras residenciais ao entrar na página
window.onload = function() {
    showPortfolio('residencial');
};