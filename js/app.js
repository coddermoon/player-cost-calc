// add all filesa

const totalCost = document.getElementById('total-cost')

let count = 0

// load data

for (const player of players) {
   const cart = card(player)
}

// soow error or success Msg

// show error ort success  massage function

const showMassage = (text, status) => {
   const div = document.createElement('div');

   div.className = `toast-message toast-message-slide-in bg-${status}`;
   div.innerText = text;
   document.body.appendChild(div)

   div.addEventListener('click', () => {
      div.classList.remove('toast-message-slide-in');
      div.classList.add('toast-message-slide-out');

   })
   setTimeout(() => {
      div.remove();
   }, 2000)
}



// add to cart function

const addToCart = (event) => {

   count++

   const playerName = event.target.parentNode.children[1].innerText


   const li = document.createElement('li')
   
   li.innerHTML = `
   <li class="font-bold text-xl py-3 border-solid">${count}.  ${playerName}</li>
   
   `
  
   //   check condition

   if (count <= 5) {

      
      document.getElementById('selected').innerText= count
      document.getElementById('players-list').appendChild(li)

      const disableBtn = event.target.setAttribute('disabled', '');
      event.target.innerText = 'Added'
      showMassage('successfully Added player', 'success')


      const setClass = event.target.classList.add("disable-btn")
   } else {
      showMassage('you Can Add Maximum 5 player', 'danger')
     return
      
   }




}


// reusable function parse into number



const parseIntoNumber = (id) => {
   const strValue = document.getElementById(id).value
   const numberValue = parseFloat(strValue)

   if (isNaN(numberValue)) {
      return 0
   } else {
      return numberValue
   }

}



// total calculation cost and added to dom

const calcTotal = () => {

   const totalExp = parseIntoNumber("player-expence") + parseIntoNumber("manager") + parseIntoNumber("couch")
   totalCost.innerText = totalExp;



   if (isNaN(totalBalanceNumber)) {
      showMassage('its be a Number')

   } else {
      return totalBalanceNumber
   }

}


const totalPlayerCost = () => {
let pers = 0
   if (count <=5) {
      pers = count
   }else{
      pers = 5
   }
  
 
      const totalPlayerCost = parseIntoNumber('per-player') * pers
      document.getElementById('player-expence').value = totalPlayerCost
   
   
   
   }