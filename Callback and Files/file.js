// fs module is used for handing the properties which are related to the file System.

var fs=require('fs');
/*
// read the content of the file .
var read_file=fs.readFile('info.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});

/* write the given contant into the file . If we wont to write some data into the file .write function firstly remove 
the existing data and then write new content into that file.

fs.writeFile('info.txt',"Best Company in the Pune",function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
})

// Append the new data into the existing  file content. append function simply add new data into end of the existing content in the file.

fs.appendFile('info.txt',"Best software company in Pune",function(err,data){
    if(err){
        throw err;
    }
    console.log("append Completed");
})

// rename the old file name to the new file name.
fs.rename('info.txt','company_info.txt',function(err,data){
    if(err){
        throw err;
    }
})

// Make new directory in given Path .

fs.mkdir('/home/priti/Nodejs/File',function(err,data){
    if(err){
        throw err;
    }
    console.log("Directory is created in the given path.")
})

// Remove the directory from the given path.
fs.rmdir('/home/priti/Nodejs/File',function(err,data){
    if(err){
        throw err;
    }
    console.log("Directory is removed from the given path.")
})

fs.exists('/home/priti/Nodejs/Files/information.txt',function(err,data){
    if(err){
        throw err;
    }
    else{
    console.log("check wheather the file is exist or not ??")
    }
})

fs.open('/home/priti/Nodejs/Files/info.txt','r',function(err,data){
    if(err){
        throw err;
    }
    else{
        console.log(data);
    }
})*/

// Read the content in the directory means the it gives the file names which are present in the given directory.

fs.readdir('/home/priti/Nodejs/Files',function(err,data){
    console.log(data)
}) 

// Delete the specfic file in the given location.
/*fs.unlink('/home/priti/Nodejs/Files/a.txt',function(){
    console.log("File successfully deleted");
})*/