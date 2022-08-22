const card = (player)=>{
    const div = document.getElementById('matches');
    div.innerHTML = `
    <div class="match">
    <div class="image">
      <img src="${player.imgUrl}" alt="">
    </div>
    <div class="description">
    
      <a href="#" class="btn">Transfer</a>
      <h4>Transfer Live: Chlesea in talks over Kimpenbe transfer</h4>
      <div class="icons">
       <div class="icon">
        <img src="./images/Time Icon.png" alt="">
        <span>2h</span>
       </div>
       <div class="icon">
        <img src="./images/Chat Icon.png" alt="">
        <span>48</span>
       </div>
      </div>
    
    </div>
    </div>
    
    
    
    `
    }