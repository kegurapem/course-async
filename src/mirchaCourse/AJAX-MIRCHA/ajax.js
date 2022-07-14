(() => {
    // 1. Instanciar el XMLHttpRequest()
    const xhr = new XMLHttpRequest();
      $xhr = document.getElementById("xhr");
      $fragment = document.createDocumentFragment(); 

    // 2. Asignar el o los eventos que vamos a estar manipulado de la petición.
    //   xhr.onreadystatechange()
      xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) {
            return;
        }

        if (xhr.status >= 200 && xhr.status < 300){
            console.log('éxito');
            // console.log(xhr.responseText);
            // $xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach(elemento => {
                const $li = document.createElement('li');
                $li.innerHTML = `${elemento.name} -- ${elemento.email} -- ${elemento.phone}`;
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment);
        } else {
            console.log('error');
            let message = xhr.statusText || 'Ocurrió un error';
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
        // console.log(xhr);
      });

    // 3. Abrir la petición, pasar como argumentos el método y el recurso o URL que vamos a consumir.
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    // ejecutar la petición
      xhr.send();
})();