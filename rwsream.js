const fs=require('fs');
//using stream we can mov or cpy a chunk of data directly
const readStream=fs.createReadStream('./example.txt');
const writeStream=fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});