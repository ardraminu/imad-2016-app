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
 
 var submit = document.getElementById("submit-btn");
 submit.onclick = function(){
       //create a request object
       var request = new XMLHttpRequest();
    
       //capture the response and store it in a variable
       request.onreadystatechange=function() {
          if(request.readyState === XMLHttpRequest.DONE ) {
               //take some action
               if(request.status === 200){
                    
     //capture a list of name and render it as a list
    var names =request.responseText;
    names = JSON.parse(names);
    var list = '';
    for(var i=0; i< names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
                }
           }  
        //not done yet
       };
      
 //  make a request
 var nameInput = document.getElementById("name");
 var names = nameInput.value;
  request.open('GET','http://ardraminu.imad.hasura-app.io/submit-name?name= ' + name, true);
  request.send(null);
 };