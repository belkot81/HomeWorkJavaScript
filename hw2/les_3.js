let f = function (a,b,c){
    let result;
        if(typeof a === 'number'&&
            typeof b === 'number' &&
            typeof c === 'number'){
            result = (a-b)/c;
        console.log(result)
    } else {
            throw new Error('Error: all parameters type should be a Number');
        }
}
f(100,5,5);