//funcion callback
function sum(num1, num2) {
    return num1 + num2;
}

//funcion que recibe como argumento a otra función (en este caso recibe la función sum)
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(5,5,sum));

//-------------------------------------------------------
// setTimeout(function, time, arguments);
setTimeout(function () {
    console.log('Hello JavaScript');
}, 3000);

//-------------------------------------------------------
//setTimeout
function grettin(name) {
    console.log(`Hello ${name}`);
}

setTimeout(grettin, 3000, 'Kevin');




