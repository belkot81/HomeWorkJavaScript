/*Дан массив с элементами `[1, 2, 5, 9, 4, 13, 4, 10]`.
С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4.
Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.*/

var arr = [1, 2, 5, 9, 1, 13, 4, 10];
const lengthVar5 = arr.length - 1;
for (var e = 0; e <= lengthVar5; e++) {
    if (arr[e] === 4) {
        console.log('Найдено: 4');
        break;
    }
    console.log('Проверен элемент: ' + e);
}