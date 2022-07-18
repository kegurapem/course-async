
function ajax() {
    const xhr = new XMLHttpRequest();
    // const API = 'https://api.escuelajs.co/api/v1';

    // xhr.onreadystatechange = function () {
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText);
    //     }

    //     xhr.open('GET', API, true);
    //     xhr.send();
    // }
    
    // Document.getElementById("botoncito").addEventListener("click", function() {
    //     ajax();
    // });

    xhr.onreadystatechange = function () {
        console.log("hola");
        }

        xhr.open();
        xhr.send();
    }
    ajax();
// }