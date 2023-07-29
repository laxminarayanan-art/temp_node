const fs=require('fs');
// //create a file
// fs.writeFile('example.txt',"this is an ex",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         {
//             fs.readFile('example.txt',(err,file)=>{
//                 if(err)
//                 console.log(err);
//                 else
//                 console.log(file);
//             });
//         }
     
// });

//to rename a file
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("renamed");
// });

//append data to file
// fs.appendFile('example2.txt','Some data being appended',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("appended");
// });

//to delete the file
fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("deleted file");
});