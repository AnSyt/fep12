'use strict';

// 2.17, 2.18

// Меньше, больше. Разработать функции для нахождения меньшего, большего из двух чисел.

// Сделайте функцию, которая принимает год, а возвращает високосный это год или нет.
// Год является високосным в двух случаях: либо он кратен (делится на) 4, но при этом не кратен 100, либо кратен 400. Год не является високосным, если он не кратен 4, либо он кратен 100, но при этом не кратен 400.
// Последние годы столетий, оканчивающиеся на два нуля, в трёх случаях из четырёх не являются високосными. Так, годы 1700, 1800 и 1900 не являются високосными, так как они кратны 100 и не кратны 400. Годы 1600 и 2000 — високосные, так как они кратны 400. Годы 2100, 2200 и 2300 — невисокосные.

// Простое число. Написать функцию, которая проверяет: является ли некоторое число простым? Число называется простым, если оно делится без остатка только на себя и на единицу.

// Квадратное уравнение. ax2 + bx + c = 0
//
// Даны три числа: a, b, c - коэффициенты квадратного уравнения. Решить квадратное уравнение.
//
// Найти дискриминант. (D)
//
// 1. Если D < 0, то квадратное уравнение не имеет корней (вывести уведомление об этом);
// 2. Если D = 0, то квадратное уравнение имеет один корень (вычислить и вывести его);
// 3. Если D > 0, то квадратное уравнение имеет два корня (вычислить и вывести их);
//
// Для решения пункта 3, понадобится встроенный объект Math и его метод sqrt (Math.sqrt(9)) чтобы вычислить квадратный корень, это как раз то, что я вспоминал чего может нехватить.




// var x = '1';
// console.log(+x);
// console.log(typeof(Number(x)));
//
// var a = 1;
// var b = 2;
//
// console.log(String(a) + String(b));
//


// console.log(typeof(typeof(num)));
// console.log(typeof(num));
// console.log(typeof(''));
// console.log(typeof(+'asd') + '<-');
// console.log(typeof(NaN) + '<-');
// console.log(typeof(NaN) + '<-');
var x;
x = 1;

console.log(x + '<-');


var x2 = 2;

myFunc('Oleh', 'R');

// Function Declaration
function myFunc(name, sname) {
    var sname = sname || 'Surname';

    x2 = 3;

    console.log(name + ' ' + sname + ' <-' + x2);
}

// Function Expression
// var myFunc2 = function(){
//     alert('HI');
// };
//
// myFunc2();




// var sayHi = function(name) {
//     alert( "Привет, " + name );
// }
//
// sayHi("Вася");

//console.log(sname, '!!!');

// function plus (a, b) {
//     var result = Number(a) + Number(b);
//
//     return result;
// }
//
// var oper1 = prompt('Operand A');
// var oper2 = prompt('Operand B');
//
// console.log(plus(oper1, oper2));
//
// function qwe() {
//     return;
//     console.log('after return');
// }

// console.log(plus);
// console.log(qwe());


// var age = prompt('Сколько вам лет?');
//
// var sayHi;
//
// if (age >= 18) {
//     sayHi = function() {
//         alert( 'Прошу Вас!' );
//     }
// } else {
//     sayHi = function() {
//         alert( 'До 18 нельзя' );
//     }
// }
//
// sayHi(1, 2, 3);
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

function showMsg(msg) {
    alert('It is ' + msg);
}

function isNumber(num) {
    return num;
}

function isInRange(num) {
    return num >= 1 && num <= 7;
}

function checkDay(num) {
    if (isNumber(num) && isInRange(num)) {
        switch (num) {
            case 1:
                showMsg('Monday');

                break;
            case 2:
                showMsg('Tuesday');

                break;
            case 3:
                showMsg('Wednesday');

                break;
            case 4:
                showMsg('Thursday');

                break;
            case 5:
                showMsg('Friday');

                break;
            case 6:
                showMsg('Saturday');

                break;
            case 7:
                alert('Sunday');

                break;
            default:
                showMsg('Smth went wrong');
        }
    }
}

function start() {
    var num = +prompt('Enter number 1-7');
    checkDay(num);
}

function myName(name = 'Vasya') {
    alert('Your name is' + name);
}

myName();

start();
