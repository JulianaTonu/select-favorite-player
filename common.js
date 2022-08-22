function getInputElementValueById(elementId){
    const InputElementvalue =document.getElementById(elementId);
    const ElementValueString =InputElementvalue.value ;
    const Element =parseFloat(ElementValueString)
}
function getTextElementValueById(elementId){
   
 const playerTextExpenses =document.getElementById(elementId)
const playerExpensesstring =playerTextExpenses.innerText
const playerExpenses =parseInt(playerExpensesstring)
return playerExpenses;
}

