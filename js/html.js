

const card = (player)=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg border-solid">
    <img class="w-full" src="${player.imgUrl}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${player.name}</div>
      
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-between">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${player.goals} Goals</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${player.Assist} Assist</span>
      
    </div>
    <div class="">
    <button id="calculate" class="text-center w-80 block my-5 bg-blue-500 mx-auto text-white px-5 py-2 ">Calculate</button>

    </div>
  </div>
    
    
    `
    document.getElementById('matches').appendChild(div)
    }