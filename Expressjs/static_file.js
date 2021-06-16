const express=require('express');
const app=express();

const PORT=process.env.PORT || 2001;
app.get('/home',function(req,res){
    res.send('<h1> Hello From Express !!!! </h1>')
})

/*
app.listen(PORT,function(){
    console.log(`Listening on Port ${PORT}`)
})*/


//const express=require('express');
const path=require('path')
const app=express();

const PORT=process.env.PORT ||2005;

app.use(express.static('Express_Program'))


app.get('/',function(req,res){
   res.sendFile(path.resolve(__dirname)+'/index.html')
});


app.get('/about',function(req,res){
    res.sendFile(path.resolve(__dirname)+'/about.html')
})

app.get('/downlaod',function(req,res){
     res.download(path.resolve(__dirname)+'/about.html')
})


app.listen(PORT,function(){
    console.log(`Listening on Port ${PORT}`)
})