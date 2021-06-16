const express=require('express');
const app=express()

var port =process.env.PORT || 5000;

app.get('/',function(req,res){
    res.send("Hello , This is <h2>Home Page </h2>");
})

app.get('/about',function(req,res){
    res.send(" Hii  !!,This is a <h2>About Page ")
})

//Here are some examples of route paths based on string patterns.

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })

app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
  }) 

  app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
  })

// Examples of route paths based on regular expressions:

//This route path will match anything with an “a” in it.

  app.get(/a/, function (req, res) {
    res.send('/a/')
  })

// This route path will match anything with end with "fly" in it.

  app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
  })
  
  

app.listen(port,function(){
    console.log(`Server is runnning on the Port ${port}`)
})