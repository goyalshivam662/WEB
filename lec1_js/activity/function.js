//function sayhey(){

  //  console.log("hello welcome to it world");

//}

//sayhey();
//console.log( sayhey);   //op -> [function :sayhey]

//console.log(sayhey());
// above line meaning is same as mention below

//let value = sayhey();
//console.log(value);


// High Order Functions => Function Which accept functions as a argument !
// Callback functions => Function which passed into a function as a argument !




function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function getFirstName(fullName){
fullName = fullName.split(" ");
return fullName[0];
}







function sayHi(fullName, fun){
let name  = fun(fullName);
console.log(name);
}

sayHi("Shivam Goyal",getFirstName);
sayHi("Rahul Bajaj",getLastName);
