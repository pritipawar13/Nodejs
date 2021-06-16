/*
Route path: /users/:userId/books/:bookId
Request URL: localhost:5000/users/50/books/1034
req.params: { "userId": "34", "bookId": "8989" }*/

const express=require('express');
const app=express()

var port =process.env.PORT || 5000

app.get('/users/:userid/books/:bookid',function(req,res){
    res.send(req.params)
})

app.listen(port,function(){
    console.log(`server is running on ${port}`)
})
