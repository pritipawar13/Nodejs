// check for even and odd.

//var number=4;
var even=function(number){
    //var number=2;
    if(number %2 ==0)
    {
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}; 

//even(number);

// check number is positive and negative then check output number is even or odd.

var no=-1;
function check_no(no)
{
    if(no>0)
    {
        console.log("number is positive");
        even(no);
    }
    else{
        console.log("number is negative");
        even(no);
    }
}

check_no(no);