
export const fetchPokemon = async (value) => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
		if (!res.ok) {
			throw new Error('Check the URL!');
		}
		const data = await res.json();
		console.log(data, data.name, data.sprites.front_default,data.id);
		const pokemonName = document.createElement('li')
		const sprites =  document.createElement('img')
		const pokeID =  document.createElement('li')
		const pokemonList = document.getElementById('displayfeatures')
		pokemonList.append(pokemonName,sprites,pokeID)
		


		pokemonName.textContent = `Name:${data.name}`;
		sprites.src = data.sprites.front_default;
		pokeID.textContent = data.id
		const pokeButton = document.createElement('button')
		pokeButton.textContent = ('Click me for stats!')
		const section = document.getElementById('pokemon-picture')
		section.append(pokemonList,pokeButton)


	} catch (err) {
		console.log(new Error(err));
	}
};