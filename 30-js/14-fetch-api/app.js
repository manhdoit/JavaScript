const slctCountries = document.querySelector('#ltctCountries');
slctCountries.onchange = showFlag;

function showFlag() {
    imgFlag.src = this.value;
}

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => show(countries));
    function show(countries) {
        for(let country of countries) {
            const option = document.createElement('option');
            option.text = country.name.common;
            option.value = country.flags.png;
            slctCountries.appendChild(option);
        }
    }