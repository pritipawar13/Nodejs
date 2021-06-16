const express=require('express');
const app=express();

var port=process.env.PORT ||2005;

app.get('/',function(req,res){
    res.send("Hello , This page is designed by using get method")
})
/*
app.post('/',function(req,res){
    res.send("hello ,This page is designed by using POST medthod")
})*/

app.listen(port,function(req,res){
    console.log(`sever is running on ${port}`)
})
