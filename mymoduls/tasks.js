 let fs =require('fs');
 let chalk=require('chalk');
 let validator=require('validator');
 const ReadDataFromJsonFile=()=>
{
   try {
    let data= JSON.parse(fs.readFileSync('./tasks.json'));
    if(!Array.isArray())throw new Error('mesh array');
        
   } 
   catch (e) {
       console.log(e.message);
       data=[];
   }
   return(data);
    
 
}
let  writedatafromjsonfile=( data)=>
{

 try{
    fs.writeFileSync('./tasks.json',JSON.stringify(data))
 }
 catch(e)
 {
 console.log(chalk.red("error"))
 }
}
 let addtask=(data)=>
 {
     mytasks=ReadDataFromJsonFile();
     writedatafromjsonfile(mytasks)

 }
 console.log(ReadDataFromJsonFile());

