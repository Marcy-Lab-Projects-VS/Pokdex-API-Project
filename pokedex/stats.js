export const getStats = async (pokemon) => {
  try{
 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)

     if(!response.ok){
       throw new Error('cannot fetch stats') 
     }
     const data = await response.json()
    console.log(data)
     const section = document.getElementById('stats')
     const ul = document.createElement('ul')
     const height = document.createElement('li')
     const weight = document.createElement('li')
     const type = document.createElement('li')
     const species = document.createElement('li')
     const ability = document.createElement('li')
     const moves = document.createElement('li')
 // add value 
     height.textContent = `Height: ${data.height}`
     weight.textContent = `Weight: ${data.weight}`
     type.textContent = `Type: ${data.types[0].type.name}`
     species.textContent = `Species: ${data.species.name}`
     ability.textContent = `Ability: ${data.abilities[0].ability.name}`
     moves.textContent = `Moves: ${data.moves[0].move.name}`
     // append 
     section.append(height,type, weight, species, ability,moves )
   }
   catch(error){
     console.warn(error.message)
   }
}