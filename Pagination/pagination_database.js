//Pagination using database.

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userschema=require('./user.model')

mongoose.connect('mongodb://localhost/pagination',{ useNewUrlParser: true , useUnifiedTopology: true})
const db=mongoose.connection;
db.once('open',async()=>{
    if(await userschema.countDocuments().exec()>0) return

    Promise.all([
        userschema.create({name:'user1'}),
        userschema.create({name:'user2'}),
        userschema.create({name:'user3'}),
        userschema.create({name:'user4'}),
        userschema.create({name:'user5'}),
        userschema.create({name:'user6'}),
        userschema.create({name:'user7'}),
        userschema.create({name:'user8'}),
        userschema.create({name:'user9'}),
        userschema.create({name:'user10'}),
    ]).then(()=>console.log('Added User'))

    })

const port=process.env.PORT ||2000;
app.get('/user',pagenateResult(userschema),function(req,res){
    res.json(res.pagenateResult)
})



function pagenateResult(model){
    return async (req,res,next)=>{
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
    try{
    results.results=await model.find().limit(limit).skip(startindex).exec()
    res.pagenateResult=results;
    next()
   }catch(err){
       res.send(err)
   }
   }
}

app.listen(port,function(){
    console.log(`server is Running on ${port}`)
})