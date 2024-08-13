const gridDisplay = document.querySelector('.grid');
const btnLoadMore = document.querySelector('.button-loadmore')
function displayImage(size){
    for (let i = 0; i < size; i++) {
        const gridItemDisplay = document.createElement('div');
        const cardItemDisplay = document.createElement('div');
        const cardItemImage = document.createElement('img');
        const imageSource = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`
        gridItemDisplay.classList.add('grid-item');
        cardItemDisplay.classList.add('card-media');
        cardItemImage.setAttribute('src', imageSource)
        gridItemDisplay.appendChild(cardItemDisplay)
        cardItemDisplay.appendChild(cardItemImage)
        gridDisplay.appendChild(gridItemDisplay);
    }
}

displayImage(3);
btnLoadMore.addEventListener('click', () => {
    displayImage(3)
});