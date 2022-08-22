const playerArray=[];

function display(playerlist){
    const totalPlayer =document.getElementById('total-player')
    totalPlayer.innerHTML ='';

    for(let i= 0; i<playerlist.length; i++){
        // console.log('playerArray',playerArray[i])
    
    const name =playerArray[i]
    // const namelLenght = parseInt(name) 
    // console.log(namelLenght)
    
    

    const ol =document.createElement('ol')
    ol.innerHTML =`
    
    <p>${i +1}. ${name}</p>
         
    `
    
    totalPlayer.appendChild(ol)
         
    

}
}

function selectPlayer(player){

    
    const playerName=player.parentNode.children[0].innerText
    
    

playerArray.push(playerName);
// console.log(playerArray)
// console.log(playerArray.length)

const totalPlayer =document.getElementById('total-player')
totalPlayer.innerText =playerArray.length
console.log('totalplayer',totalPlayer)
display(playerArray);


console.log('playerArray',playerArray.length)

if(playerArray.length >=5){
    alert("player cannot select more than 5")
}else{
    return;
}

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

const playerInputExpenses =document.getElementById('player-expenses')
const playerExpensesstring =playerInputExpenses.innerText
const playerExpenses =parseInt(playerExpensesstring)

playerInputExpenses.innerText =perPlayerTotal;
})