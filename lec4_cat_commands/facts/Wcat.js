let fs  = require("fs");
let content = fs.readFileSync("./f1.txt");

content = content +"" ;
let data = content.split("\n\r");
console.log(data);
