// Dados das obras
// Dados das obras unificado
const obras = {
    residencial: [
        {
            nome: 'Sunflower 01',
            img: '../assets/portfolio/residencial/01_Sunflower_1/res_01_capa.png',
            descricao: 'Foram feitos na fachada principal porta pivotante em ACM bronze com painéis fixos laterais com perfis acabamento em bronze e vidros incolores. Na parte superior da fachada foi utilizado vidro com junta seca. Todas as demais esquadrias da residência foram feitas com perfis na cor branco brilhante e vidros incolores. Arquitetura Eliane Saliba. Goiânia-GO.',
            imagens: [
                '../assets/portfolio/residencial/01_Sunflower_1/res_01_capa.png',
                '../assets/portfolio/residencial/01_Sunflower_1/res_01_1.png',
                '../assets/portfolio/residencial/01_Sunflower_1/res_01_2.png',
                
            ]
        },
        {
            nome: 'Triannon 01',
            img: '../assets/portfolio/residencial/01_Sunflower_1/res_01_2.png',
            descricao: '',
            imagens: [
                '../assets/portfolio/residencial/02_Triannon_1/triannon_01.png'
            ]
        },
        {
            nome: 'Sunflower 02',
            img: '../assets/portfolio/residencial/01_Sunflower_1/res_01_2.png',
            descricao: 'Descrição para a obra Sunflower 02.',
            imagens: [
                '../assets/portfolio/residencial/03_Sunflower_2/sunflower_02.png'
            ]
        },
        // Continue para todas as obras...
    ],
    predial: [
        {
            nome: 'Edifício Gênesis',
            img: 'link_da_imagem3',
            descricao: 'Descrição para o Edifício Gênesis.',
            imagens: [
                'link_da_imagem3',
                'link_da_imagem4'
            ]
        }
    ],
    comercial: [
        {
            nome: 'Coco Bambu',
            img: 'link_da_imagem7',
            descricao: 'Descrição para a obra Coco Bambu.',
            imagens: [
                'link_da_imagem7',
                'link_da_imagem8'
            ]
        }
    ]
};


// Função para exibir o portfólio de acordo com a categoria
// Função para exibir o portfólio de acordo com a categoria
function showPortfolio(tipo) {
    const container = document.getElementById('portfolio_obras');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    obras[tipo].forEach(obra => {
        const obraDiv = document.createElement('div');
        
        // Cria o link que envolverá a imagem
        const obraLink = document.createElement('a');
        obraLink.href = `projetos.html?obra=${encodeURIComponent(obra.nome)}`;

        const obraImg = document.createElement('img');
        obraImg.src = obra.img;
        obraLink.appendChild(obraImg); // Coloca a imagem dentro do link

        obraDiv.appendChild(obraLink); // Adiciona o link ao div
        
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


// CÓDIGO DE CADA OBRA CADASTRADA 


// Função para pegar o parâmetro da URL
function getObraFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('obra'); // Pega o valor do parâmetro 'obra'
}

// Função para renderizar os dados da obra selecionada
function renderObraDetails() {
    const obraNome = getObraFromURL();
    
    // Encontrar a obra no objeto "obras"
    let obraEncontrada = null;
    for (const categoria in obras) {
        const obrasCategoria = obras[categoria];
        obraEncontrada = obrasCategoria.find(obra => obra.nome === obraNome);
        if (obraEncontrada) break; // Se encontrou a obra, sai do loop
    }

    if (obraEncontrada) {
        // Atualizar o título da obra
        document.querySelector('.obra_dados_title').textContent = obraEncontrada.nome;
        
        // Atualizar a descrição da obra
        document.querySelector('.obra_dados_descricao').textContent = obraEncontrada.descricao;

        // Renderizar as imagens da obra
        const imagensContainer = document.querySelector('.portfolio_fotos');
        imagensContainer.innerHTML = ''; // Limpa imagens anteriores
        obraEncontrada.imagens.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imagensContainer.appendChild(imgElement);
        });
    } else {
        console.error('Obra não encontrada!');
    }
}

// Carregar os detalhes da obra ao carregar a página
window.onload = renderObraDetails;
