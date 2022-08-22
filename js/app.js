
for(const player of players){
   const cart = card(player)
}


// add to cart function

const addToCart = (event)=>{
   const playerName = event.target.parentNode.parentNode.children[1].children[0].innerText
   
 const li = document.createElement('li')
   li.innerHTML = `
   <li class="font-bold text-xl py-3 border-solid"> ${playerName}</li>
   
   `
  
   document.getElementById('players-list').appendChild(li)

}

