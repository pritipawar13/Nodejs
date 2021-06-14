fs=require('fs')

/*var pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" Data Processed")
        //reject(" Error generated")  
    },2000)
})
//console.log(pr)
.then(function(msg){
    console.log(msg);
}).catch(function(err){
    console.log("error meassage"+err);
})*/
/*
var square=(a)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a*a)
            //reject(" Error generated")  
        },2000)
    })
    
}

square(2).then(function(result){
    console.log("Result is :"+result);
    square(result).then(function(res){
        console.log("result is "+res)
    })
})*/
/*
 square(2).then((result)=>{
     console.log("result:"+result);
     return square(result)
 }).then((res1)=>{
     console.log("result:"+res1)
 }).catch((err)=>{
     console.log(err)
 })*/
/*

function fetchData(cd){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var data={'pcosde':10222,'course':'Nodejs'};
            resolve(data)

        },2000)
    })
}
console.log("start here")
fetchData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
*/
/*
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1");
    },2000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2");
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise3");
    },1000)
})*/
/*
Promise.all([p1,p2,p3]).then((prmsg)=>{
    console.log(prmsg)
})

Promise.all([p3,p2,p1]).then((prmsg)=>{
    console.log(prmsg)
}).catch((err)=>{
    console.log("error meassage:"+err)
})*/
/*
Promise.allSettled([p1,p3,p2]).then((prmsg)=>{
    console.log(prmsg);

}).catch((err)=>{
    console.log(err)
})

Promise.race([p3,p3,p1]).then((prmsg)=>{
    console.log(prmsg);

}).catch((err)=>{
    console.log(err)
})*/

// Read the contant of the file by using promises

/*
function read_file(filename){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fs.readFile(filename,'utf8',(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data)
                }
                
            })
        },1000)
    })
}
read_file('/home/priti/Nodejs/OOPS/file_promise.js').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})*/


var done=true;
var isdone=new Promise((resolve,reject)=>{
    if(!done){
        done_work="Todays work is done !!!"
        resolve(done_work)
    }
    else{
        not_done="today's work is not done .still completing"
        reject(not_done);
    }
}).then((msg_done)=>{
    console.log(msg_done);
}).catch((msg)=>{
    console.log(msg)
})