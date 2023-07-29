const fs=require('fs');
//creating a folder
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('folder created');
//     }
// });

//creating and deleting the folder
// fs.mkdir('tutorial',(err)=>{
//         if(err)
//         console.log(err);
//         else{
//             console.log("folder created moving to deletion step");
//             fs.rmdir('tutorial',(err)=>{
//                if(err)
//                 console.log(err);
//                 else{
//                     console.log("successfully deleted");
//                 }
//             });
//         }
// });

//create a folder and inside that a file
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./tutorial/ex.txt',"hey this is folder inside file",(err)=>{
//              if(err)
//                 console.log(err);
//                 else
//                 {
//                 //deleteing a folder with file cant use rmdir
//                 fs.unlink('./tutorial/ex.txt',(err)=>{
//                 if(err)
//                 console.log(err);
//                 else{
//                 fs.rmdir("tutorial",(err)=>{
//                 if(err)
//                 console.log(err)
//                 else
//                 console.log("deleted folder");
//     });
//     }
// });
//                }
//             });
//     }});


//for this i manually added a folder ex with somme 2 files in it
fs.readdir('ex',(err,files)=>{
    if(err)
    console.log(err);
    else{
    for(let file of files){
        fs.unlink('./ex/'+file,(err)=>{
            if(err)
            console.log(err);
            else{
                console.log('sucessfully deleted files');
            }
        });
    }
    }
});