const clothes = [
    { imgUrl: "images-duck-game/blus_saia-removebg-preview.png", width: '210px', top: '19%', left: '42%' },
    { imgUrl: "images-duck-game/blusin_rosa-removebg-preview.png", width: '140px', top: '21%', left: '45%' },
    { imgUrl: "images-duck-game/blusin-removebg-preview.png", width: '170px', top: '21%', left: '44%' },
    { imgUrl: "images-duck-game/calca-removebg-preview.png", width: '165px', top: '33%', left: '44%' },
    { imgUrl: "images-duck-game/conjunto_smile-removebg-preview.png", width: '195px', top: '21%', left: '43%' },
    { imgUrl: "images-duck-game/macac_duck-removebg-preview.png", width: '210px', top: '19%', left: '43%' },
    { imgUrl: "images-duck-game/saia-removebg-preview.png", width: '160px', top: '33%', left: '44%' },
    { imgUrl: "images-duck-game/sap_listra-removebg-preview.png", width: '140px', top: '43%', left: '45%' },
    { imgUrl: "images-duck-game/sap_rosa-removebg-preview.png", width: '140px', top: '41%', left: '45%' },
    { imgUrl: "images-duck-game/vestido-removebg-preview.png", width: '180px', top: '21%', left: '44%' }
];

const clothes1 = [
    { imgUrl: "images-duck-game/blu-saia1.png", width: '210px'},
    { imgUrl: "images-duck-game/calca1.png", width: '210px'},
    { imgUrl: "images-duck-game/conj-duck1.png", width: '210px'},
    { imgUrl: "images-duck-game/conj-smile1.png", width: '210px'},
    { imgUrl: "images-duck-game/saia1.png", width: '210px'},
];

// Mapeamento de imagens do primeiro array para o segundo
const clothesMap = {
    "images-duck-game/blus_saia-removebg-preview.png": "images-duck-game/blu-saia1.png",
    "images-duck-game/calca-removebg-preview.png": "images-duck-game/calca1.png",
    "images-duck-game/conjunto_smile-removebg-preview.png": "images-duck-game/conj-smile1.png",
    "images-duck-game/macac_duck-removebg-preview.png": "images-duck-game/conj-duck1.png",
    "images-duck-game/saia-removebg-preview.png": "images-duck-game/saia1.png",
};

function exibirArea() {
    document.querySelector('.name').style.display = 'none';
    document.querySelector('.area-start').style.display = 'none';
    document.querySelector('.area-duck').style.display = 'flex';

    const clothesContainer = document.querySelector('.clothes');

    // Limpa o conteúdo anterior, se houver
    clothesContainer.innerHTML = '';

    function roupClick(event) {
        const clickedItem = clothes.find(item => item.imgUrl === event.target.src.replace(location.origin + '/', ''));

        if (clickedItem) {
            const matchingImg = clothesMap[clickedItem.imgUrl];
            const duckElement = document.querySelector('.duckImg'); // Elemento do pato

            if (matchingImg) {
                const matchedItem = clothes1.find(item => item.imgUrl === matchingImg);

                if (duckElement.src.includes(matchedItem.imgUrl)) {
                    // Se o item já está no pato, remove a roupa e mantém o pato
                    duckElement.src = 'images-duck-game/duck.png'; // Substitua pelo caminho da imagem original do pato
                } else {
                    // Caso contrário, adiciona ao pato
                    duckElement.src = matchedItem.imgUrl;
                }

                // Atualiza os estilos
                duckElement.style.width = matchedItem.width;
                duckElement.style.left = matchedItem.left || 'initial';
                duckElement.style.top = matchedItem.top || 'initial';

            } else {
                // Lógica para roupas que não têm correspondência em clothes1
                let rpaElement;

                if(clickedItem.imgUrl === 'images-duck-game/blusin_rosa-removebg-preview.png') {
                    document.querySelector('.duck').classList.add('blusinRosa') 
                } else {
                    document.querySelector('.duck').classList.remove('blusinRosa') 
                }

                if (clickedItem.imgUrl === 'images-duck-game/calca-removebg-preview.png' || clickedItem.imgUrl === 'images-duck-game/saia-removebg-preview.png') {
                    rpaElement = document.querySelector('.rpa1');
                } else if (clickedItem.imgUrl === 'images-duck-game/sap_listra-removebg-preview.png' || clickedItem.imgUrl === 'images-duck-game/sap_rosa-removebg-preview.png') {
                    rpaElement = document.querySelector('.rpa2');
                } else {
                    rpaElement = document.querySelector('.rpa');
                }

                if (rpaElement.src.includes(event.target.src)) {
                    // Se sim, remove a imagem
                    rpaElement.src = '';
                    rpaElement.style.width = '0';
                    rpaElement.style.left = '0';
                    rpaElement.style.top = '0';
                } else {
                    // Se não, define a imagem e seus estilos
                    rpaElement.src = clickedItem.imgUrl;
                    rpaElement.style.width = clickedItem.width;
                    rpaElement.style.left = clickedItem.left;
                    rpaElement.style.top = clickedItem.top;
                }
            }
        } else {
            console.error('Item não encontrado:', event.target.src);
        }
    }

    // Itera sobre o array de caminhos das imagens
    clothes.forEach(item => {
        let rous = document.createElement('div');
        let imgs = document.createElement('img');
        imgs.width = 180; // Tamanho padrão das miniaturas
        imgs.src = item.imgUrl;
        imgs.style.cursor = 'pointer';
        imgs.addEventListener('click', roupClick);

        rous.appendChild(imgs);
        clothesContainer.appendChild(rous);
    });
}

document.querySelector('.exibir').addEventListener('click', exibirArea);
