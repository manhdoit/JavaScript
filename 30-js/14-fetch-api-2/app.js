fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => showInfo(countries));
    
function showInfo(countries) {
    console.log(countries);
    const select = document.createElement("ul");
    for(let country of countries){
        let name = country.name.common;
        let flag = country.flags.png;
        console.log(flag);
        const option = generateOption(name, flag);
        select.appendChild(option);
    }
    document.querySelector('#app').appendChild(select)
}


function generateOption(text, value) {
    const item = document.createElement("li");
    const image = document.createElement("img");
    image.classList.add('flag');
    image.setAttribute('src',value);
    item.innerText = text;
    item.appendChild(image);
    return item;
}