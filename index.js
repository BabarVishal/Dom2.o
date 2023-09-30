
var butt = document.querySelectorAll(".vishal").length;
for (var i = 0; i < butt; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        prompt("Hello");
    });
}

 var butt = document.querySelector("button").addEventListener("click",function(){
    prompt("Hello");
})

document.querySelector(".vishal").addEventListener("click",function(){
    prompt("Vishal");
});


var butt = document.querySelectorAll(".vishal").length;

for (var i = 0; i < butt; i++){
    document.querySelectorAll(".vishal")[i].addEventListener("click",function(){
       prompt("Hello What What is u age ?");
        
    })
}


                                               // Add Sound on Button ........

 var butt = document.querySelectorAll(".vishal").length;
 for (var i = 0; i < butt; i++){
    document.querySelectorAll(".vishal")[i].addEventListener("click",function(){
    //   var music = new Audio('');
    //   music.play();
    prompt("Hello Vishal");
    })  
 }


 // Higher Order Functions and Passing Functions as Arguments

function vishal(h1,h2){
   return h1 + h2;
}

function babar(h1,h2){
 return h1 - h2;
}

function multi(h1,h2){
 return h1 * h2;
}

function div(h1,h2){
 return h1 / h2;
}

function modulo(h1,h2){
 return h1 % h2;
}

function all(h1,h2,operator){
 return operator(h1,h2);
}

all(2,3,vishal);   // 5

all(2,3,babar);    // -1
                                  
 
// A Deeper Understanding of Javascript Objects

var car = {
   name:"Vishal",
   Modal:22,                            
   avr:222,
}
console.log(car);


var myName = {
   name : "Vishal",
   lastName : "Babar",
   age : 22,
   city :"jalna",
   fullName : function(){
       return this.fullName + " " + this.lastName + "my age is " + this.age;
   }
}

console.log(myName);


// How to Use Switch Statements in Javascript

switch (key) {
   case value:
       
       break;

   default:
       break;
}

// Objects, their Methods and the Dot Notation