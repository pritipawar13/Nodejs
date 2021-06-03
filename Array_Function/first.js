var a=require('./info.json');
exports.info1= function(){
    console.log(a.firstname);
    console.log(a.lastname);
    console.log(a.address);
};

//module.export=info1;