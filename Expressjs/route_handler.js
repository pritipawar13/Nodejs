
const express=require('express');
const app=express()

var port=process.env.PORT ||2000;

app.get('/demo/a',function(req,res){
    res.send('<h1> Hello ....</h1>')
})
/*
app.get('/demo/b',function(req,res,next){
    console.log(" Response is send by other");
    next()
}),function(req,res){
    res.send("Hello from Example B")
}
*/
/* We can also pass the message from one function to another and after passing we can also display the content in server
for that purpose we can used array of callback function for handling routes

*/

var pass1 = function (req, res, next) {
    console.log("Request is passed to next i.e pass2")
    next()
  }
  
  var pass2 = function (req, res, next) {
    console.log("Request is passed to the browser")
    next()
  }
  
  var pass_ser = function (req, res) {
    res.send('Hello from C!')
  }


var p1=function(req,res,next){
    console.log("Passing content to next");
    next()
}

var p2= function(req,res,next){
    console.log("passing data")
    next()
}

var p3=function(req,res,next){
    console.log("passing")
}

app.get('/pass',[p1,p2,p3],function(res,res,next){
    console.log("finally passed")
    next()

}),function(req,res){
    res.send("Data is arrived from differnt pass")
}


  
  app.get('/passing/c', [pass1, pass2,pass_ser])
  


app.listen(port,function(){
    console.log(`server is Running on ${port}`)
})