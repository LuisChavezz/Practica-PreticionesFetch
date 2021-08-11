
const jorkeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const getJoke = async() => {  //obtener broma de chuck norris de la url

    try {
        
        const response = await fetch( jorkeUrl ); // 'response' la petición

        if ( !response.ok ) throw 'Error!'; // sí la petición resulta erronea

        const { icon_url, id, value } = await response.json(); 
            // .json() extrae el 'body' de la petición
            // guarda en un objeto los valores de las propiedades escritas, del response.json

        return { icon_url, id, value }; 

    } catch ( err ) {
        throw err;
    }
}

const getUsers = async() => { //obtener usuarios de la url

    try {
        
        const response = await fetch( urlUsers );
        const { data: users } = await response.json(); // Guarda en 'users' el contenido de la propiedad 'data' del response.json

        return users;

    } catch (err) {
        throw err;
    }
}

export{
    getJoke,
    getUsers
}