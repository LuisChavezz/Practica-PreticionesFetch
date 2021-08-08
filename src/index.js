
const jorkeUrl = 'https://api.chucknorris.io/jokes/random';

/*fetch( jorkeUrl ).then( response => {

    response.json().then( data => { // .json() extrae el 'body' de la petición
        console.log(data); // data guardará el objeto json (body de la petición)
        console.log(data.value);
    });
});*/

// (forma más limpia de trabajarlo)
fetch( jorkeUrl ) 
    .then( response => response.json() ) // promesa que regresa otra promesa (promesa dentro de otra)
    .then( data => { // el 'then' de la segunda promesa
        console.log(data);
        console.log(data.value);
    }); 