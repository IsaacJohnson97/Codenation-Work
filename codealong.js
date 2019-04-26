
/* PROMISES  */


let i = 7

function waitASecond(){
        
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (i>5){
            resolve("resolved");
        }
            else if (i<5){
            reject("rejected");
        }
        }, 1000);
        
    });
}   


async function process(){
    
    waitASecond();
    let status = await waitASecond();  
    console.log(status);  
    // "resolved"
};
