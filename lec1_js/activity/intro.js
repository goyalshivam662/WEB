let a = 10;
let b = true;
let c = undefined;
let d = "shivam";


/// undefined

/*let g ;
console.log(g);


if(true){
a= 100;

}

console.log(a);


const pi =2.5;
console.log(pi)
pi = 99;
console.log(pi);
*/



//console.log(12 == "12"); // true  (not check data type)
//console.log(12 === "12"); // false (check data type)


// object 

//let movies = {}; //empty object



let data = { 
 name:"shivamm_goyal",
 place:"YV",
 movies :{
    names : "Pk",
    ratings : 10
 }
}

//console.log(data.name); // dot notation

let key = "name";

//console.log(data[key]);  // braket notation

data.college = " NIEC"

//console.log(data);



// Arrays

let goyal = [10, false,"raja",{key : "value"},[1,2,3]
];

//console.log(goyal);

//in loop

for(let i in data){
    console.log(i);
}
