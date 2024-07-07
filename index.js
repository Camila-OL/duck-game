const clothes = [
    { imgUrl: "./images-duck-game/blus_saia-removebg-preview.png", width: '210px', top: '19%', left: '42%' },
    { imgUrl: "./images-duck-game/blusin_rosa-removebg-preview.png", width: '140px', top: '21%', left: '45%' },
    { imgUrl: "./images-duck-game/blusin-removebg-preview.png", width: '170px', top: '21%', left: '44%' },
    { imgUrl: "./images-duck-game/calca-removebg-preview.png", width: '165px', top: '33%', left: '44%' },
    { imgUrl: "./images-duck-game/conjunto_smile-removebg-preview.png", width: '195px', top: '21%', left: '43%' },
    { imgUrl: "./images-duck-game/macac_duck-removebg-preview.png", width: '210px', top: '19%', left: '43%' },
    { imgUrl: "./images-duck-game/saia-removebg-preview.png", width: '160px', top: '33%', left: '44%' },
    { imgUrl: "./images-duck-game/sap_listra-removebg-preview.png", width: '140px', top: '43%', left: '45%' },
    { imgUrl: "./images-duck-game/sap_rosa-removebg-preview.png", width: '140px', top: '41%', left: '45%' },
    { imgUrl: "./images-duck-game/vestido-removebg-preview.png", width: '180px', top: '21%', left: '44%' }
];

const clothes1 = [
    { imgUrl: "./images-duck-game/blu-saia1.png", width: '210px' },
    { imgUrl: "./images-duck-game/calca1.png", width: '210px' },
    { imgUrl: "./images-duck-game/conj-duck1.png", width: '210px' },
    { imgUrl: "./images-duck-game/conj-smile1.png", width: '210px' },
    { imgUrl: "./images-duck-game/saia1.png", width: '210px' },
];

const clothesMap = {
    "./images-duck-game/blus_saia-removebg-preview.png": "./images-duck-game/blu-saia1.png",
    "./images-duck-game/calca-removebg-preview.png": "./images-duck-game/calca1.png",
    "./images-duck-game/conjunto_smile-removebg-preview.png": "./images-duck-game/conj-smile1.png",
    "./images-duck-game/macac_duck-removebg-preview.png": "./images-duck-game/conj-duck1.png",
    "./images-duck-game/saia-removebg-preview.png": "./images-duck-game/saia1.png",
};

function exibirArea() {
    document.querySelector('.name').style.display = 'none';
    document.querySelector('.area-start').style.display = 'none';
    document.querySelector('.area-duck').style.display = 'flex';

    const clothesContainer = document.querySelector('.clothes');
    clothesContainer.innerHTML = '';

    function roupClick(event) {
        const clickedSrc = new URL(event.target.src).href;
        let clickedItem = clothes.find(item => new URL(item.imgUrl, location.href).href === clickedSrc);

        if (!clickedItem) {
            clickedItem = clothes1.find(item => new URL(item.imgUrl, location.href).href === clickedSrc);
        }

        if (clickedItem) {
            const duckElement = document.querySelector('.duckImg');
            const currentDuckSrc = new URL(duckElement.src, location.href).href;

            if (clothesMap[clickedItem.imgUrl]) {
                const matchingImg = clothesMap[clickedItem.imgUrl];
                const matchedItem = clothes1.find(item => item.imgUrl === matchingImg);

                if (currentDuckSrc === new URL(matchedItem.imgUrl, location.href).href) {
                    duckElement.src = './images-duck-game/duck.png';
                    duckElement.style.width = '';
                    duckElement.style.left = '';
                    duckElement.style.top = '';
                } else {
                    duckElement.src = matchedItem.imgUrl;
                    duckElement.style.width = matchedItem.width;
                    duckElement.style.left = matchedItem.left || 'initial';
                    duckElement.style.top = matchedItem.top || 'initial';
                }
            } else {
                let rpaElement;
                if (clickedItem.imgUrl === './images-duck-game/blusin_rosa-removebg-preview.png') {
                    document.querySelector('.duck').classList.add('blusinRosa');
                } else {
                    document.querySelector('.duck').classList.remove('blusinRosa');
                }

                if (clickedItem.imgUrl === './images-duck-game/calca-removebg-preview.png' || clickedItem.imgUrl === './images-duck-game/saia-removebg-preview.png') {
                    rpaElement = document.querySelector('.rpa1');
                } else if (clickedItem.imgUrl === './images-duck-game/sap_listra-removebg-preview.png' || clickedItem.imgUrl === './images-duck-game/sap_rosa-removebg-preview.png') {
                    rpaElement = document.querySelector('.rpa2');
                } else {
                    rpaElement = document.querySelector('.rpa');
                }

                if (rpaElement.src.includes(clickedItem.imgUrl)) {
                    rpaElement.src = '';
                    rpaElement.style.width = '0';
                    rpaElement.style.left = '0';
                    rpaElement.style.top = '0';
                } else {
                    rpaElement.src = clickedItem.imgUrl;
                    rpaElement.style.width = clickedItem.width;
                    rpaElement.style.left = clickedItem.left;
                    rpaElement.style.top = clickedItem.top;
                }
            }
        } else {
            console.error('Item não encontrado:', clickedSrc);
        }
    }

    clothes.forEach(item => {
        let rous = document.createElement('div');
        let imgs = document.createElement('img');
        imgs.width = 180;
        imgs.src = item.imgUrl;
        imgs.style.cursor = 'pointer';
        imgs.addEventListener('click', roupClick);

        rous.appendChild(imgs);
        clothesContainer.appendChild(rous);
    });
}

document.querySelector('.exibir').addEventListener('click', exibirArea);
