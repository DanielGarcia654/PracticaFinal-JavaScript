document.addEventListener('DOMContentLoaded', () => {

    const pokemonContainer = document.querySelector('.pokedex-container');
    const entradaPokemonCantidad = document.getElementById('entrada-pokemon-cantidad');
    const botonCantidadPokemon = document.getElementById('boton-cantidad-pokemon');

    const fetchPokemon = async (limite = 150) => {
        const promises = [];
        if (limite < 1 || limite > 1025) {
            alert('El límite debe estar entre 1 y 1025');
            return;
        }

        pokemonContainer.innerHTML = '';

        for (let i = 1; i <= limite; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }

        try {
            const resultados = await Promise.all(promises);

            resultados.forEach(pokemon => {
                createPokemonCard(pokemon);
            });
        } catch (error) {
            alert("Error al obtener los datos de Pokémon: " + error);
            pokemonContainer.innerHTML = '<p style="text-align: center; color: red;">Error al cargar los Pokémones. Inténtalo de nuevo.</p>';
        }
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

        // Genera el HTML de cada tipo
        const tiposHTML = tipos.map(type =>
            `<span class="type-badge type-${type}">${type.toUpperCase()}</span>`
        ).join('');

        // Creando el HTML
        const pokemonHTML = `
            <div class="pokemon-image-container">
                <img src="${img}" alt="${nombre}">
            </div>
            <div class="pokemon-info">
                <span class="pokemon-id">#${pokemon.id}</span>
                <h2 class="pokemon-name">${nombre}</h2>
                <div class="pokemon-types">
                    ${tiposHTML}
                </div>
            </div>
        `;

        pokemonEl.innerHTML = pokemonHTML;
        pokemonContainer.appendChild(pokemonEl);
    };

    botonCantidadPokemon.addEventListener('click', () => {
        const nuevoLimite = parseInt(entradaPokemonCantidad.value);

        if (isNaN(nuevoLimite) || nuevoLimite == 0) {
            alert('Por favor, ingresa un número válido.');
            return;
        }

        fetchPokemon(nuevoLimite);
    });

    const initialLimit = parseInt(entradaPokemonCantidad.value);

    fetchPokemon(initialLimit);

});
