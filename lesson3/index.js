'use strict';
//https://wtfjs.com/

//2.9 - 2.15

/*
1. Три числа. Пользователь вводит 3 числа и тип поиска (минимальное или максимальное). Программа выводит результат.
2. Сумма диапазона. Пользователь задает диапазон чисел. Если данные некорректны - программа повторно запрашивает ввод. Вычислить сумму чисел в заданном диапазоне.
 */

var a = "1";
var b = "2";

console.log(+a + +b);

// > < == >= <= != === !==

console.log(1 > 2);
console.log('bbc' > 'acd');

console.log(1 !== '1');

console.log(null == undefined);

//alert( undefined > 0 ); // false (1)
//alert( undefined < 0 ); // false (2)
//alert( undefined == 0 ); // false (3)

//alert( null > 0 ); // false
//alert( null == 0 ); // false

//alert(null >= 0); //true

//alert('text');

// var conf = confirm('To be or not to be?');
// console.log(conf);
//
// if (conf) {
//     var amount = prompt('How much money?');
//     var curr = prompt('With currency?');
//     var result = amount * curr;
//     alert(amount + '$ with currency ' + curr + ' is equal ' + result);
// } else {
//     alert("Bye!");
// }
//
// /
//
// console.log(result);
// console.log('2' * '2');
//
//
//
// if (true) {
//     //alert('1 < 2');
// }

// var sum = prompt('Sum');
//
// if (sum >= 800) {
//     alert('Discount 20%');
// } else if (sum < 800 && sum >= 600) {
//     alert('Discount 10%');
// } else if (sum < 600 && sum > 300) {
//     alert('Discount 5%');
// } else {
//     alert('No discount');
// }
//
// var res = (1 > 2) ? 'Yes' : 'No';
// alert(res);

//var pr = prompt('Day of the week');

//}

// if (pr == 'Monday' || pr == 'Tuesday' || pr == 'Thursday' ) {
//     alert('Working day');
// } else {
//     alert('Not a working day');
// }
//
// var x = confirm('?');
//
// if (!x) {
//     alert('Yes');
// }

var a = 4;
//
// while (a <= 3) {
//     alert(a);
//     a++;
// }



//do {
    //var age = prompt('How old are you?');
    //alert(a);
    //a++;
//} while (age < 18);

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var sum = 0;
//
// while (true) {
//
//     var value = +prompt("Введите число", '');
//
//     if (!value) {
//         break;
//     } // (*)
//
//     sum += value;
//
// }
// alert( 'Сумма: ' + sum );

for (var i = 0; i <= 10; i++) {

    if(i % 2 != 0 || i == 0) {
        continue;
    }

    console.log(i);
}
var month = prompt('Month?');
switch(month) {
    case 'January' || 'February' || 'December':  // if (x === 'value1')
        alert('Winter');
        break;

    case '':  // if (x === 'value2')
        break;

    default:
        alert('Wrong month.');
        break;

}