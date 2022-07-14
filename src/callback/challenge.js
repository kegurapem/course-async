//Clase7: XMLHTTP Request
//XMLHTTP Request: Permite manejar de mejor forma las peticiones y es fundamental del API de JavaScript. Permite hacer peticiones a recursos XML o JSON.

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET, urlApi, true');
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            //0 indica que no se ha inicializado
            //1 todavía no se ha llamado el valor de send, cuando se ejecuta(loading)
            //2 cuando ya se ejecutó el valor de send
            //3 interactuando, está descargando o trabajando con la solicitud
            //4 cuando se ha completado la llamada
            //200 muestra cuando la solicitud ha sido correcta.
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send(); //acá estamos pidiendo que se ejecute el ajax y también le estamos mandando datos
}