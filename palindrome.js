//Find Palindrome number . 

/*

var num=12321;
var de_num=num;
function palindrome(num)
{
    var rem;
    var rev=0;
    while(num>0)
    {
        rem=num%10;
        rev=rev*10+rem;
        num=num/10;
    }
    if(de_num=rev)
    {
        console.log("number is palindrome ",de_num);
    }
    else{
        console.log("number is not palindrome",de_num);
    }
}
palindrome(num);
  */

// Create a var addition and value that variable is the function .
var addition=function(){
    var a=10;
    var b=20;
    console.log("addition :",(a+b));

};
addition();
// module.export is used for the get the value and export the user defined module .
module.export=addition;