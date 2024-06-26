

import { fetchPokemon } from "./pokemon";
const handleSubmission = (e) => {
	e.preventDefault();
	const input = document.getElementById(`poke-search`)
	fetchPokemon(input.value);
  e.target.reset()
};

const main = () => {
	const searchForm = document.getElementById('pokemon-sub');
	searchForm.addEventListener('submit', handleSubmission);
};


main();
