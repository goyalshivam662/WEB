#!/usr/bin/env node
//console.log(process);
let content = process.argv.slice(2);
let fs = require("fs");
//console.log(content);

let flags = [];
let files = [];

for(let i=0 ;i< content.length; i++){

    if(content[i].startsWith('-'))
    {
 
        flags.push(content[i]);
        
     }
    else{
         files.push(content[i]);
    }


}

//console.log(files);
//console.log(flags);

//for file

let fileContent ="";
for(let j=0 ;j<files.length;j++){

  fileContent += fs.readFileSync( files[j]) ;  
}

console.log(fileContent);  
