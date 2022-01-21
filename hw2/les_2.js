function sum(){
    let result = 0;
    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === 'number'){
            result += arguments[i];
        } else {
            //console.log('Error: parameter type is not a Number!')
            throw new Error('Error: parameter type is not a Number!');
        }
        //console.log(result);
    }

    //return result;
    console.log(result);
}

sum(2,3,'12',15);
