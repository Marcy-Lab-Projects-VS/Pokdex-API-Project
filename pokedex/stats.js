export const getStats = async (pokemon) => {
  try{
 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)

     if(!response.ok){
       throw new Error('cannot fetch stats') 
     }
     const data = await response.json()
     // console.log(data)
     const section = document.getElementById('stats')
     const ul = document.createElement('ul')
     const height = document.createElement('p')
     const weight = document.createElement('li')
     const type = document.createElement('li')
     const species = document.createElement('li')
     const ability = document.createElement('li')
     const moves = document.createElement('li')
 // add value 
     height.textContent = data.height
     weight.textContent = data.height
     type.textContent = data.height
     species.textContent = data.height
     ability.textContent = data.height
     moves.textContent = data.height
     // append 
     section.append(height)
   }
   catch(error){
     console.warn(error.message)
   }
}