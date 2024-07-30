const sum=(x,y,cb)=>{
    setTimeout( () =>{
        cb(x+y);
    },2000);
    return;
};

function printresult(result){
    console.log(result);
}

console.log(sum(10,20,printresult));