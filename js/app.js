// add all filesa

const totalCost = document.getElementById('total-cost')

let count = 0

for(const player of players){
   const cart = card(player)
}



// add to cart function

const addToCart = (event)=>{
   
  count = count + 1

   const playerName = event.target.parentNode.children[1].innerText
   
   
 const li = document.createElement('li')
   li.innerHTML = `
   <li class="font-bold text-xl py-3 border-solid">${count}.  ${playerName}</li>
   
   `
//   check condition

if (count <=5) {
   document.getElementById('players-list').appendChild(li)
  
const disableBtn = event.target.setAttribute('disabled', '');
 
const setClass = event.target.classList.add("disable-btn")
}else{
  alert('maxium 5 player is added')
}

   


}



// parse into number

// functions

const parseIntoNumber = (id) => {
   const strValue = document.getElementById(id).value
   const numberValue = parseFloat(strValue)

   if (isNaN(numberValue)) {
       return 0
   } else {
       return numberValue
   }
   
}

const  totalPlayerCost = ()=>{
   const totalPlayerCost = parseIntoNumber('per-player')*count
   document.getElementById('player-expence').value = totalPlayerCost

   
   
}



const calcTotal = () => {

   const totalExp = parseIntoNumber("player-expence") + parseIntoNumber("manager") + parseIntoNumber("couch")
   totalCost.innerText = totalExp;

  

if (isNaN(totalBalanceNumber)) {
  alert('its be a number')
   
}else{
   return totalBalanceNumber
}

}


