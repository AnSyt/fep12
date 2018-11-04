'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// В домашних заданиях по массивам, длину массива задает пользователь, массив
//     заполняется случайными целыми числами. необходимо предусмотреть некорректный
//     ввод данных. Каждая программа сначала выводит исходный массив, потом результат
//     работы.​


//     Пользователь вводит ФИО, привести ФИО к единому виду . Например: ввели
//     иВаноВ Иван иванЫЧ, будет - Иванов Иван Иваныч

// Операции с массивом. В одномерном массиве, состоящем из N вещественных
//     чисел вычислить:
//     1. Сумму отрицательных элементов.
//     2. Произведение, находящихся между min и max элементами.
//     3. Произведение элементов с четными номерами.
//     4. Сумму элементов, находящихся между первым и последним
//     отрицательными элементами.
//     5. Максимальный элемент массива.
//

// Сжать массив. Сжать массив, удалив из него все 0 и заполнить освободившиеся
//     справа элементы значениями -1. Например дан массив [1, 4, 0, 5, 0 ,6, 8] - будет [1, 4, 5, 6,
//         8, -1, -1]. Массив может быть любой длинны.


if (0.4 + 0.5 == 0.9) {
    //console.log('ok');
}

//console.log(((0.1 * 10) + (0.2 * 10)) / 10);

// Array

var arr = new Array(10);
var str = 'abc';

arr[0] = 'a';
arr[9] = 'b';

console.log(arr);

var arr2 = [1, 2, 3];
var arr3 = [, , undefined ,];

arr2[0] = true;
arr2[1] = [1, 2];
arr2[2] = null;

//console.log(arr3);

//console.log([,,].length);

// push();

var arr = [1, 2, 3];

arr.push(4, 5);
console.log(arr, ' <- push');

// unshift();

arr.unshift(5);
console.log(arr, ' <- unshift');

// pop();

arr.pop();
console.log(arr, ' <- pop');

// shift();

arr.shift();
console.log(arr, ' <- shift');

arr.push(5,6,7,8);

var elems = ['a', 'b', 'c', 'd', 'e', 'f']

//slice
var sliced = elems.slice(3, 5); // from start to end wout end
console.log(arr, ' <- sliced');
console.log(sliced, ' <- slice');


// splice

var a = [1,2,3,4,5,6,7,8];
var splice = a.splice(4); // Вернет [5,6,7,8]; a = [1,2,3,4]
console.log(a, splice);
console.log(a.splice(1,2)); // Вернет [2,3]; a = [1,4]
console.log(a.splice(1,1)); // Вернет [4]; a = [1]

// sort

var unsorted = ['a', 'g', 's', 'e', 'b'];
var unsorted_num = [1, 5, 3, 2, 4];

unsorted.sort(function(a, b) {
    //-1, 0, >1
    if (a > b) {
        return -1;
    }

    if (a < b) {
        return 1;
    }

    if (a == b) {
        return 0;
    }
});

unsorted_num.sort(function (a, b) {
    return b-a;
});

console.log(unsorted);
console.log(unsorted_num);

// concat
var a = [1,2,3,4];
var b = [5,6,7,8];

var c = b.concat(a);
console.log(c);

// join

var x = c.join('-');
console.log(x);

// indexOf();
c.push('a');
console.log(c);
console.log(c.indexOf('a'));
