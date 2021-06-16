
const express=require('express')
const app=express()

var port= process.env.PORT || 2002;
/*
// This is middleware function 
var midd=function(req,res,next){
    console.log("hiiii")
    next()

}

// use middleware function by using ".use"
app.use(midd)

// after executing middleware function .this routing function call
app.get('/midd',function(req,res){
    res.send("Hii .. This is an example of MiddleWare")
})*/

var requestTime=function(req,res,next){
    req.requestTime=Date.now()
    next()
}

app.use(requestTime);

app.get('/date',function(req,res){
    var responseText = 'Hello World!<br>'
     responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})


app.listen(port,function(){
    console.log(` Server is running on ${port}`)
})