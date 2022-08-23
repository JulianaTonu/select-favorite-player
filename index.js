
const playerArray=[];

function display(playerlist){
    const totalPlayer =document.getElementById('total-player')
    totalPlayer.innerHTML ='';
    
    for(let i= 0; i<playerlist.length; i++){
       
    const name =playerArray[i]
    // console.log('name',name)
    
    const ol =document.createElement('ol')
    ol.innerHTML =`
    
    <p>${i +1}. ${name}</p>
         
    `
    
    totalPlayer.appendChild(ol);
   
}
}

var buttons = document.getElementsByTagName('button');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(event){
        event.target.disabled = true;
    });
}


function selectPlayer(player){

    const totalPlayer =document.getElementById('total-player')
    totalPlayer.innerText =playerArray.length
    
    const playerName=player.parentNode.children[0].innerText
    
    if(playerArray.length <5){
        playerArray.push(playerName);
        
    }else{
        alert("Sorry! You cannot select more then  5 players")
      
    }
    display(playerArray);
    
}



document.getElementById('calculate').addEventListener('click',function(){


// player cost 

const perPlayer =getInputElementValueById('per-player-field')
const totalPlayer =playerArray.length


perPlayerTotal =  perPlayer * totalPlayer
 
const playerTextExpenses =document.getElementById('player-expenses')

playerTextExpenses.innerText = perPlayerTotal;


})


document.getElementById('calculate-total').addEventListener('click',function(){


// Manager
const managerInputAmount =getInputElementValueById('manager')

//Coach 
const coachInputAmount =getInputElementValueById('coach')

//Total
const total = perPlayerTotal + managerInputAmount + coachInputAmount

const totalTextAmount =document.getElementById('total')

totalTextAmount.innerText = total;

console.log('total',total)
})

