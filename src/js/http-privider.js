
const jorkeUrl = 'https://api.chucknorris.io/jokes/random';


const getJoke = async() => {

    try {
        
        const response = await fetch( jorkeUrl ); // 'response' guarda el 'body' (objeto) de la petición

        if ( !response.ok ) throw 'Error!'; // sí la petición resulta erronea

        const { icon_url, id, value } = await response.json(); 
            // .json() extrae el 'body' de la petición
            // guarda en un objeto los valores de los atributos escritos entre {}

        return { icon_url, id, value }; 

    } catch ( err ) {
        
        throw err;

    }

    

};


export{
    getJoke
}