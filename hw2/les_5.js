let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];

for(var i = 0; i <= arr1.length; i++){
    if(isPositive(arr1[i]) === true){
        arr2.push(arr1[i]);
    }

}

function isPositive (num) {
    if(typeof num == 'string'){
        //console.log(typeof num);
        throw new Error('Error: parameter type is not a Number!');
    }
    else if ( num < 0) {
         //console.log('false');
        return false;
    }
    else if (num >= 0) {
        //console.log('true');
        return true;
    }
}
console.log(arr2);