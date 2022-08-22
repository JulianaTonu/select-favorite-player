const playerArray=[];

function display(playerlist){
    const totalPlayer =document.getElementById('total-player')
    totalPlayer.innerHTML ='';

    for(let i= 0; i<playerlist.length; i++){
        // console.log(playerArray[i])
    
    const name =playerArray[i]
    
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

document.getElementById('total-player').innerText =playerArray.length

display(playerArray);
// console.log(selectfive)


}