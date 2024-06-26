
export const fetchPokemon = async (value) => {
	try {
    
    const pokemonStats = document.getElementById('stats');
    pokemonStats.innerHTML = '';


    const section = document.getElementById('pokemon-picture');
    section.innerHTML = '';
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
		if (!res.ok) {
      const errorText = document.createElement('p')
      errorText.textContent = `Can you spell`
      section.append(errorText)
			throw new Error('Check the URL!');
		}
		const data = await res.json();
		console.log(data, data.name, data.sprites.front_default,data.id);
		const pokemonName = document.createElement('li')
		const sprites =  document.createElement('img')
		const pokeID =  document.createElement('li')
		const pokemonList = document.createElement('ul')
		pokemonList.append(pokemonName,sprites,pokeID)
		

//enabling first index character to be uppercase
		pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);;
		sprites.src = data.sprites.front_default;
		pokeID.textContent = `ID: ${data.id}`
		const pokeButton = document.createElement('button')
		pokeButton.textContent = ('Click me for stats!')

		section.append(pokemonList,pokeButton)


	} catch (err) {
		console.log(new Error(err));
	}
};