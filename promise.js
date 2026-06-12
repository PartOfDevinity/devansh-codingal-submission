new Promise((res, rej) =>{
    if(false){
        res("promise complete")
    }else{
        rej("promise incomplete")
    }
}).then((data) => console.log(data)).catch((err) => console.log (err))

  
async function CallApi() {
    let raw = await fetch(`https://randomuser.me/api`);
    let ans = await raw.json()
    console.log(ans)
}
CallApi()

function sum(a,b,c){
    console.log(a+b)
    c()
}
function callback(){
    console.log("hello this is a callback function")
}
sum(10,20,callback)