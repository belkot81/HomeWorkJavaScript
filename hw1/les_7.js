//Написать код который посчитает сумму всех четных элементов в массиве.

var arr = [1,2,3,4];
var sumElements = 0, l = arr.length
for (i = 0; i < l ; i++)
{
    if(arr[i] % 2 == 0) {
        sumElements += arr[i];
    }
}
console.log('Сумма элементов = ' + sumElements);