function isEven(x){

    if(typeof x !== 'number'){
        throw new Error( 'Error: parameter type is not a Number!')
    }
     else if(x % 2 === 0){
    console.log('чётное');
    return true;
} else{
    console.log('не чётное');
    return false;
}

}
isEven(600)