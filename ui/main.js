//counter code

var button = document.getElementById('counter');


button.onclick = function () {
    
       //create a request object
       var request = new XMLHttpRequest();
    
       //capture the response and store it in a variable
       request.onreadystatechange=function() {
          if(request.readyState === XMLHttpRequest.DONE ) {
               //take some action
               if(request.status === 200){
                   var counter = request.responseText;
                   var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                }
           }  
        //not done yet
       };
      
 //  make a request
  request.open('GET','http://ardraminu.imad.hasura-app.io/counter', true);
  request.send(null);
};
//submit name
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var sumit = document.getElementById('submit-btn');
 submit.onclick = function(){
     // make arequest to the server and send the name
     
     //capture a list of name and render it as a list
    var name =['name1','name2','name3'];
    var list = '';
    for(var i=0;i<nmae.length;i++){
        list +='<li>'+ name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
 };