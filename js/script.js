var input = document.getElementById("input");
var addButton = document.getElementById("add");
var items = document.getElementsByClassName("items")[0];
var ul = document.getElementById("ul");



function buttonAction(){
   var li=  document.createElement("li");
   var delButton = document.createElement("button");
   delButton.appendChild(document.createTextNode("x"));
   delButton.classList.add("delete");
   li.appendChild(document.createTextNode(input.value));
   li.appendChild(delButton);
   ul.appendChild(li);
   input.value ="";
}



addButton.addEventListener("click", function(){
    if(input.value !==""){
        buttonAction();
    }else{
        alert("You must type something!!")
    }
});

//Stack overflow
ul.addEventListener("click", function(e) {
    if (e.target && e.target.matches("li")) {
      e.target.classList.toggle("remove"); // new class name here
    
    }//me
    else if (e.target && e.target.matches("button")){
        e.target.parentNode.remove();
    }

});

input.addEventListener("click", function(){
    if(input.value !==""){
        input.value="";
    }
});

input.addEventListener("keypress",function(e){
    if (input.value!=="" && e.which===13){
        buttonAction();
    }else if(e.which===13 && input.value===""){
        alert("Type something lazy!!")
    }
});



