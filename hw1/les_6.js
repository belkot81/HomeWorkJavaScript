//Написать код который посчитает сумму всех элементов в масиве.

var arr = [1,2,3,4,9];
var sum = 0;
for (i = 0; i < arr.length; i++)
{
    sum += arr[i];
}
console.log('Сумма элементов = ' + sum);