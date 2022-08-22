
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

    
    const playerName=player.parentNode.children[0].innerText
    
    if(playerArray.length <5){
        playerArray.push(playerName);
        
    }else{
        alert("Sorry! You cannot add more then  5 players")
      
    }
    display(playerArray);


totalPlayer.innerText =playerArray.length
const totalPlayer =document.getElementById('total-player')

console.log('totalplayer',totalPlayer)

console.log('playerArray',playerArray.length)


}

document.getElementById('calculate').addEventListener('click',function(){


// player cost 

const perPlayer =document.getElementById('per-player-field')
const perPlayerfieldString =perPlayer.value ;
const perPlayerAmount =parseInt(perPlayerfieldString)

const totalPlayer =playerArray.length
perPlayerTotal =  perPlayerAmount * totalPlayer
console.log('perPlayer' ,perPlayerTotal)

// Player Expenses 

const playerTextExpenses =document.getElementById('player-expenses')
const playerExpensesstring =playerTextExpenses.innerText
const playerExpenses =parseInt(playerExpensesstring)

playerTextExpenses.innerText = perPlayerTotal;

// const playerTextExpenses =getTextElementValueById('player-expenses')
// playerTextExpenses.innerText =perPlayerTotal;





})

document.getElementById('calculate-total').addEventListener('click',function(){


    // Manager
const managerInputAmount =document.getElementById('manager')
const managerInputAmountString =managerInputAmount.value ;
const managerAmount =parseInt(managerInputAmountString);

//Coach 
const coachInputAmount =document.getElementById('coach')
const coachInputAmountString =coachInputAmount.value ;
const coachAmount =parseInt(coachInputAmountString);

//Total
const total = perPlayerTotal + managerAmount + coachAmount

const totalTextAmount =document.getElementById('total')
const totalTextAmountstring =totalTextAmount.innerText
const totalAmount =parseInt(totalTextAmountstring)

totalTextAmount.innerText = total;

console.log('total',total)
})

