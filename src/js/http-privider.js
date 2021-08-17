
const jorkeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

//Cloudinary (nube a subir archivos)
const cloudPreset = 'sfjmvsfk'; //valor definido por la nube
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dzdgdfadg/upload'; //url destino a subir los archivos


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

const uploadImage = async( uploadedfile ) => { // Subir archivos a la url

    const formData = new FormData(); // crea objeto para subir el archivo (un formulario)
    formData.append( 'upload_preset', cloudPreset ); //añadimos el Preset a la información enviar
    formData.append( 'file', uploadedfile); //añadimos el archivos que vamos a enviar

    try {
        
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( response.ok ) {
            const cloudResponse = await response.json();
            
            return cloudResponse.secure_url;
            
        } else {
            throw await response.json();
        }

    } catch (err) {
        throw err;
    }
}

export{
    getJoke,
    getUsers,
    uploadImage
}