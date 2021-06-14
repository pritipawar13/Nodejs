// Create a generator . * symbol is used for the creating generator . "yield" keyword is used for pasued the execution
// and "next()" are used for resume the execution where the execution 
/*
function *fruit_generator(){
    yield 'apple';
    yield 'banana';
    return 'mango'
}

var obj1=fruit_generator();
console.log(obj1.next())
console.log(obj1.next());
//[2]
console.log(obj1.next());
*/

// Generator as iterator

function* fruit_iterator(arr){
    for(var i=0;i<arr.length;i++){
        yield arr[i];
    };
}
var iterator = fruit_iterator(['apple', 'orange', 'watermelon']);
var currentItem = iterator.next();
while(!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}