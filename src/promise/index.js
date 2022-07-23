/* Una promesa tiene 3 estados:
    1. Pendiente.
    2. Cumplido.
    3. Rechazado.

- promise regresa una function , con 2 funciones dentros que seria resolve o reject.
*/

const promise = new Promise(function(resolve, reject) {
    resolve('')
});


const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
});

countCows.then((result) => {
    console.log(result);
}) .catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
