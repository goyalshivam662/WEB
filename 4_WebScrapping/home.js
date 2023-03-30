let rst = require("request");
let cheerio = require("cheerio");
let fs = require("fs");


//let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423" ;
// .ds-inline-flex.ds-items-start.ds-leading-none .ds-block.ds-text-center

let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/gujarat-titans-vs-rajasthan-royals-final-1312200/ball-by-ball-commentary";



rst(url ,cb);

function cb(error,response,body){
//fs.writeFileSync("./home.html", body);
parseBody(body); 

}
//https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/gujarat-titans-vs-rajasthan-royals-final-1312200/ball-by-ball-commentary
//.ds-hover-parent .ds-grow .ci-html-content.ds-py-2.ds-px-3

function parseBody(html){

    let ch = cheerio.load(html);
    let tag = ch('.ds-hover-parent .ds-grow .ci-html-content.ds-py-2.ds-px-3');
   let final = ch(tag[2]).text();   
    console.log(final);  

}