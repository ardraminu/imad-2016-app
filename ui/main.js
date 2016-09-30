//counter code

var button = document.getElementById('counter');
button.onclick = function(){
 //render the variablein the correct span
 counter= counter +1;
 var span=document.getElementById('count');
 span.innerHTML=counter.toString();
    
};