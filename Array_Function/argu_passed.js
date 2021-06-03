/* There are two methods to pass a argument to the function .
1) call by value :  means we can pass a value to the function .but the actual parameter are copied into the formal parameter. actual parameter means the vscope of value is through 
out the program ,and formal parameter means the scope of a parameter within the function .
both the parameter are pointing to different memory address . they cannot be affect each other .*/

// call by value

function call_by_value(a,b){
    a=3;
    b=4
    //console.log("value of a within func : ",a);
    //console.log("value of b within func : ",b);
}

var a=7;
var b=8;
call_by_value(a,b);
console.log("actual value of a : ",a);
console.log("actual value of b : ",b);


