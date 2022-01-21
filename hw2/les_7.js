

let arr =[];
function getDivisors(x) {
    if(typeof x !== 'number'){
        throw new Error( 'Error: parameter type is not a Number!')
    } else if( x <= 0){
        throw new Error( 'Error: parameter cant be a 0')
    } else{
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            arr.push(i)
        }
    }
    } console.log(arr)
}
getDivisors(8);