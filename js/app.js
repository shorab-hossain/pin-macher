function getPin(){
    const pin = Math.floor(Math.random()* 10000);
    const pinString = pin + '';
    
    if(pinString.length == 4 ){
        return pin
    }else{
        console.log('this pin is 3digit',pin)
        return getPin();
       
    }
}
function generatePin(){
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const inputNumber = document.getElementById('display-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            inputNumber.value ='';
        }
    }
    else{
        const previousNumber = inputNumber.value;
        const newNumber = previousNumber +  number;
        inputNumber.value = newNumber;
    }
})

function submitPin(){
    const generatePin = document.getElementById('display-pin').value;
    const calculatePin = document.getElementById('display-numbers').value;
    const successPin = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if(generatePin == calculatePin){
        successPin.style.display ='block';
        errorMessage.style.display ='none';
    }
    else{
        successPin.style.display ='none';
        errorMessage.style.display ='block';
    }
}