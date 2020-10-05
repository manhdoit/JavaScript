var memberCard = {
    tier: 'silver'
}

function getTotal(price, card) {
    var discountRate;
    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
        break;
        case 'silver':
            discountRate = 0.05;
        break;
        case 'gold':
            discountRate = 0.08;
        break;
        case 'diamon':
            discountRate = 0.1;
            break;
        default:
            discountRate = 0;

    }
    // if(card.tier === 'bronze') {
    //     discountRate = 0.02
    // } else if (card.tier === 'silver') {
    //     discountRate = 0.05
    // } else if (card.tier === 'silver') {
    //     discountRate = 0.08
    // } else {
    //     discountRate = 0.1
    // }
    return price * (1 - discountRate);
}

var total = getTotal(100, memberCard);
// console.log(total)


function () {

}