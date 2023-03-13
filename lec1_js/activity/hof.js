

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
