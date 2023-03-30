let fs  = require("fs");
let cheerio = require("cheerio");

let data = fs.readFileSync("./index.html");
//console.log(data+"");

let ch =  cheerio.load(data);

let pTags = ch('p').text();
console.log(pTags);


