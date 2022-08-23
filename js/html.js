

const card = (player)=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-solid player p-4 shadow-xl rounded-xl mx-auto ">
            <div class="bg-slate-200 rounded-xl mx-auto">
                <img class="mx-auto" src="${player.imgUrl}" alt="jacket">
            </div>
            <h4 class="text-3xl font-semibold">${player.name} </h4>
            
            <div class="px-6 pt-4 pb-2 flex justify-between">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${player.goals} Goals</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${player.Assist} Assist</span>
                
              </div>
               
              <button id="calculate" class="text-center  block my-5 bg-blue-500 mx-auto text-white px-5 py-2 "onclick="addToCart(event)">Calculate</button>
    
            
    
        </div>
    
    
    `
    document.getElementById('players').appendChild(div)

    }

    // create a list items
    const list =(playerName)=>{

   

 
    }