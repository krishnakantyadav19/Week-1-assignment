const fs = require("fs");

fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err,"error in file reading");
        return;
    }
    console.log(data)
})
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum += i;
}
console.log(sum);