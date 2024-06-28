import { getStats } from './stats'
import { fetchPokemon } from "./pokemon";

const handleSubmission = (e) => {
  e.preventDefault();

  let input = document.getElementById('poke-search').value.toLowerCase()
  // const pokemon = input.value.toLowerCase()
  fetchPokemon(input);
  console.log(input)
  const showButton = document.getElementById('statsbutton');
  // const pokemonStats = document.getElementById('stats');
  // pokemonStats.innerHTML = ''
  // pokemonStats.textContent = ""
  // console.log(showButton)
  // showButton.addEventListener('click', () => { 
  //   pokemonStats.innerHTML = '';
  //   pokemonStats.textContent = "";
  //   getStats(input); 
  // })
      
  if (input.trim() === ''){
    showButton.style.display = 'none'
    pokemonStats.innerHTML = ''
    pokemonStats.textContent = ""
  } else{
  showButton.style.display = 'block'
  }
  input = ""

  e.target.reset()
};

const main = () => {

  
  // const pokemonStats = document.getElementById('stats');
  // pokemonStats.innerHTML = '';
  const searchForm = document.getElementById('pokemon-sub');
   searchForm.addEventListener('submit', handleSubmission);




  const showButton = document.getElementById('statsbutton')
  showButton.addEventListener('click', getStats)

};


main();