export const fetchPokemon = async (value) => {
  try {
    const dataStats = document.getElementById('data-stats');
    if (dataStats && dataStats.innerHTML !== "") {
      dataStats.innerHTML = "";
    }

    const section = document.getElementById('pokemon-picture');
    section.innerHTML = '';

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
    if (!res.ok) {
      const errorText = document.createElement('p');
      errorText.textContent = `No pokemon found under that name. Check spelling and try again!`;
      section.append(errorText);
      throw new Error('Check the URL!');
    }

    const data = await res.json();
    console.log(data, data.name, data.sprites.front_default, data.id, data.sprites.front_shiny);

    const pokemonName = document.createElement('li');

    const defaultSprite = document.createElement('img');
    const backDefaultSprite = document.createElement('img');
    const shinySprite = document.createElement('img');
    const backShinySprite = document.createElement('img');

    const pokeID = document.createElement('li');
    const pokemonList = document.createElement('ul');

    pokemonList.append(pokemonName, defaultSprite,backDefaultSprite, shinySprite,backShinySprite, pokeID);

    pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    backDefaultSprite.src = data.sprites.back_default;
    defaultSprite.src = data.sprites.front_default;
    shinySprite.src = data.sprites.front_shiny;
    backShinySprite.src = data.sprites.back_shiny;

    pokeID.textContent = `ID: ${data.id}`;

    section.dataset.name = pokemonName.textContent.toLowerCase();
    section.append(pokemonList);

   

  } catch (err) {
    console.log(new Error(err));
  }
};
