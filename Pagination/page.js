const express=require('express');
const app=express();

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

app.get('/user',function(req,res){
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
    results.results=user.slice(startindex,endindex);
    res.json(results)
})


app.listen(port,function(){
    console.log(`server is Running on ${port}`)
})