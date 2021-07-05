//Pagination using Middleware.

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=process.env.PORT ||2000;

const user=[
    { id:1,name:'name1'},
    {id:2,name:'name2'},
    { id:3,name:'name3' },
    {id:4,name:'name4'},
    {id:5, name:'name5' },
    {id:6,name:'name6'},
    { id:7,name:'name7'},
    {id:8,name:'name8'},
    {id:9,name:'name9'},
    { id:10, name:'name10'},
    {id:11,name:'name11'},
]

const post=[
    { id:1,name:'post1'},
    {id:2,name:'post2'},
    { id:3,name:'post3' },
    {id:4,name:'post4'},
    {id:5, name:'post5' },
    {id:6,name:'post6'},
    { id:7,name:'post7'},
    {id:8,name:'post8'},
    {id:9,name:'post9'},
    { id:10, name:'post10'},
    {id:11,name:'post11'},
]
app.get('/user',pagenateResult(user),function(req,res){
    res.json(res.pagenateResult)
})

app.get('/posts',pagenateResult(post),function(req,res){
    res.json(res.pagenateResult)
})

function pagenateResult(model){
    return (req,res,next)=>{
        const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    const startindex=(page-1)*limit;
    const endindex=page*limit;

    const results={};
    results.next={
        page:page+1,
        limit:limit
    }
    results.previous={
        page:page-1,
        limit:limit
    }
   
   results.results=model.slice(startindex,endindex);
    res.pagenateResult=results;
    next()
   }
}

app.listen(port,function(){
    console.log(`server is Running on ${port}`)
})