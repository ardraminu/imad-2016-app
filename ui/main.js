console.log('Loaded!');

//change the text of the main-text  div
var element = document.getElementById('main-text');

element.innerHTML = "new value";

//move the image
var img = document.getElementById('madi');
marginleft = 0;
function moveright(){
     marginleft = marginleft + 5;
     img.style.marginleft = marginleft + "px";
    
}
  img.onclick = function () {
      var intervel = setIntervel(moveright,50);
 };
