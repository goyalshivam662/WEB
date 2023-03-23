let fs = require("fs");

let content  = fs.readFileSync("./f1.txt");

content = content + "" ;

//-s remove extra spaces

let data = content.split("\r\n");
//console.log(data);

let spaceRemove = [] ;
let empty = false;
function removeLargeSpace(data){

    for(let i=0 ; i < data.length ; i++){
     
        if(data[i] == "" &&  !empty){
            spaceRemove.push(data[i]);
            empty = true;
    
        }else if(data[i]  != ""){
            spaceRemove.push(data[i]);
        }
    }
    
    //
}
removeLargeSpace(data);

let joinedSting =  spaceRemove.join("\n")

console.log(joinedSting);