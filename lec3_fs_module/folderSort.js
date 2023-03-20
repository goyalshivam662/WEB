let fs =  require("fs");
var path = require("path");
let extensionPredefine = require("./util");
let folderPath = "./Downloads";
let extFolderPath ;

function checkFolderExist(extensionName){
// check if extensionName is  with any folderName
// .jpg
// "./Downloads"
let count = 0 ;
  for( let key in extensionPredefine){
// "Images" //"Audio"......
     if(extensionPredefine[key].includes(extensionName)){
      // string interpolation
        extFolderPath = `${folderPath}/${key}`;
        // "./Downloads/Image"
        count++;
        break;
     }
  }

   console.log(count);
 // let size = Object.keys(extensionPredefine).length;
 // if(key.length >= size){
   // ./Download/Mis
   extFolderPath = folderPath+"/Misc";
  
  //}
     
return fs.existsSync(extFolderPath); 

}

function moveFile(fileName){
// copy file
let sourcePath = `${folderPath}/${fileName}`;  //"./Downloads/abc.txt"
let destinationPath = `${extFolderPath}/${fileName}`;// "./Downloads/Images/abc.txt"
fs.copyFileSync(sourcePath,destinationPath);

// delete file
fs.unlinkSync(sourcePath);

}
function createFolder(){

fs.mkdirSync(extFolderPath);

}


function sortFolder(folderPath){
// get content of folderpath
let content = fs.readdirSync(folderPath);
//console.log(content);

for(let i=0 ;i < content.length; i++){
  // get extension of each file
   //let ext = content[i].split(".");
   //console.log(ext[1]);
    let extensionName = path.extname(content[i]);
    let isFolder  = checkFolderExist(extensionName);
    if(isFolder){
      // move file
      moveFile(content[i]);
    }else{
     //create folder
     createFolder();
      // move file
      moveFile(content[i]);
    } 

}

}

sortFolder(folderPath);