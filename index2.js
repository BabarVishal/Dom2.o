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

