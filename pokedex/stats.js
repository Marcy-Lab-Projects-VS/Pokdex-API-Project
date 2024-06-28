export const getStats = async (e) => {
  try{
    console.log(e);
    const pokemonName = document.getElementById('pokemon-picture').dataset.name;
    const section = document.getElementById('stats');
    section.innerHTML = ""; 
    section.textContent = "";
    console.log(pokemonName);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
     if(!response.ok){
       throw new Error('cannot fetch stats') 
     }
     const data = await response.json()
     console.log(data)
    //  const section = document.getElementById('stats')
     const ul = document.createElement('ul')

     const ul2 = document.createElement('ul2')
     const ul3 = document.createElement('ul2')

     const height = document.createElement('li')
     const weight = document.createElement('li')
     const type = document.createElement('li')
     const species = document.createElement('li')
     const ability = document.createElement('li')

     const hp = document.createElement('li')

     const attack = document.createElement('li')
     const defense = document.createElement('li')
     const special = document.createElement('li')
     const spDefense = document.createElement('li')

 //dataValues
     height.textContent = `Height: ${data.height}`
     weight.textContent = `Weight: ${data.weight}`
     type.textContent = `Type: ${data.types[0].type.name}`
      if (data.types[1]) {
         type.textContent += ` / ${data.types[1].type.name}`;
     }

     species.textContent = `Species: ${data.species.name}`
     ability.textContent = `Ability: ${data.abilities[0].ability.name}`

     hp.textContent = `HP: ${data.stats[0].base_stat}`
     attack.textContent = `Attack: ${data.stats[1].base_stat}`
     defense.textContent = `Defense: ${data.stats[2].base_stat}`
     special.textContent = `Special: ${data.stats[3].base_stat}`
     spDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`


     // append 
     ul.setAttribute('id', 'data-stats')
     ul2.setAttribute('id', 'data2-stats')
     ul3.setAttribute('id', 'data3-stats')
     section.innerHTML = '';
     section.textContent = "";
     
     ul.append(height,type, weight, species, ability)
    //  section.append(ul);

     ul2.append(hp,attack,defense,special,spDefense)
    //  section.append(ul2);    //  section.innerHTML = '';
    //  section.textContent = "";
    ul3.append(ul,ul2)
    section.append(ul3)

   }
   catch(error){
     console.warn(error.message)
   }
}