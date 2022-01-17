//Отсортировать массив по убыванию.

const arr = [1,2,3,4,5,6];
for (var i = 0, endI = arr.length ; i < endI; i++) {
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[arr.length - j] > arr[arr.length - j - 1]) {
            var swap = arr[arr.length - j];
            arr[arr.length - j] = arr[arr.length - j - 1];
            arr[arr.length - j - 1] = swap;
        }
    }
}
console.log(arr);