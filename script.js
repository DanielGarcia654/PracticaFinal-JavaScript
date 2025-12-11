const pokemonContainer = document.querySelector('.pokedex-container');

const fetchPokemon = async () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) { // 150, se puede cambiar
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    const resultados = await Promise.all(promises);

    resultados.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
};

const createPokemonCard = (pokemon) => {

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon-card');

    // Tipos de pokemon
    const tipos = pokemon.types.map(tipo => tipo.type.name);
    const tipo = tipos[0];
    const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    // Usando la imagen oficial de la API
    const img = pokemon.sprites.front_default;

    // Creando el HTML
    const pokemonHTML = `
        <div class="pokemon-image-container">
            <img src="${img}" alt="${nombre}">
        </div>
        <div class="pokemon-info">
            <span class="pokemon-id">#${pokemon.id}</span>
            <h2 class="pokemon-name">${nombre}</h2>
            <div class="pokemon-types">
                <span class="type-badge type-${tipo}">${tipo.toUpperCase()}</span>
            </div>
        </div>
    `;

    pokemonEl.innerHTML = pokemonHTML;
    pokemonContainer.appendChild(pokemonEl);
};

fetchPokemon();

