

fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => console.log(data.id))
    .catch(error => console.error(error))