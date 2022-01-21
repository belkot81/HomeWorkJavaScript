let f = function (number){
    if(typeof number === 'number'){
        number = Math.pow(number,3);
        console.log(number);
    } else {
        throw new Error('Error: parameter type is not a Number!');
        //console.log('Error: parameter type is not a Number!')
    }

}
f(5);