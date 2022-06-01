// Bona sort!

var primary = document.getElementById('primary-number').innerHTML=Math.floor(Math.random()*10);
var secondary = document.getElementById('secondary-number').innerHTML=Math.floor(Math.random()*10);;




var resultado=parseInt(primary)+parseInt(+secondary)
random=Math.floor(Math.random()*10)
console.log(random)

function opera(){
    var resul = document.getElementById('guess').value;
    var mensaje = document.getElementsByClassName('greeting-message');
  
  
if(resul==resultado){
 
    mensaje[0].innerText="Correcte "; 
    mensaje[0].style.display = 'block';
    mensaje[0].style.color = 'green';


}
else{
    mensaje[0].innerText="Ho sento! El valor correcta era "+resultado; 
    mensaje[0].style.display = 'block';
    mensaje[0].style.color = 'red';

}

}

