console.log("start");

async function callAPI(){
  const pr1 = new Promise((res,rej)=>{
    console.log("promise started");
    setTimeout(()=>{console.log("timeout1....")},1000);
  });  
}
callAPI();