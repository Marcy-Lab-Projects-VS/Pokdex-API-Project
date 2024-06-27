import { getStats } from './stats'
import { fetchPokemon } from "./pokemon";

const handleSubmission = (e) => {
  e.preventDefault();
  const input = document.getElementById('poke-search')
  const pokemon = input.value.toLowerCase()
  fetchPokemon(pokemon);
  console.log(pokemon)
  const showButton = document.getElementById('statsbutton');
  // console.log(showButton)
  showButton.style.display = 'block'
  showButton.addEventListener('click', () => { 
    const pokemonStats = document.getElementById('stats');
    pokemonStats.innerHTML = '';
    getStats(pokemon) })
  e.target.reset()
};

const main = () => {
  const pokemonStats = document.getElementById('stats');
  pokemonStats.innerHTML = '';
  const searchForm = document.getElementById('pokemon-sub');
  searchForm.addEventListener('submit', handleSubmission); 
  searchForm.addEventListener('submit', () => {
    const pokemonStats = document.getElementById('stats');
    pokemonStats.innerHTML = '';

  }); 
  // const showButton = document.getElementById('statsbutton')
  // showButton.addEventListener('click', getStats)

};


main();
