/*
Дан массив с числами `[1, 2, 3]`.
Создайте функцию `f`, которая принимает данный массив в качестве параметров, а затем последовательно выводит на экран его элементы.
Обязательно нужно использовать рекурсию.
Использовать цикл запрещено.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только не пустой массив.
*/
/*function func(arr) {
    console.log(arr.shift()); // выведет 1
    console.log(arr); // выведет [2, 3] - массив уменьшился

    console.log(arr.shift()); // выведет 2
    console.log(arr); // выведет [3] - массив уменьшился

    console.log(arr.shift()); // выведет 3
    console.log(arr); // выведет [] - массив пуст
}

func([1, 2, 3]);*/

function f(arr) {


    if(typeof arr !== 'object'){
        throw new Error('Error: parameter type should be an array')
    }
    else if (arr.length !== 0){
        console.log(arr.shift());
        f(arr);

    }
    else {
        throw new Error('Error: parameter cant be an empty')
    }
}

f(['1', 2, 3]);

/*console.log(f([1, 2, 3]));
console.log(f(1, 2, 3)); // Error: parameter type should be an array
console.log(f('Content')); // Error: parameter type should be an array
console.log(f([])); // Error: parameter can't be an empty*/