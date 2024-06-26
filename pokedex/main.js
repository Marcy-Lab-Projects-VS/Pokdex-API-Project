import { getStats } from './stats'

const submitForm = (e)=>{
  const input = document.getElementById('poke-search')
 e.preventDefault() 
 getStats(input.value)
 console.log('success!')
}


const main = () =>{
   const form = document.getElementById('pokemon-sub')
 form.addEventListener('submit',submitForm )

}

main()

