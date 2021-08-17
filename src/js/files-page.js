import { uploadImage } from "./http-privider";

const body = document.body;
let inputFile, imgPhoto;

const createInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Upload files</h1>
        <hr>

        <label>upload image: </label>

        <input type="file" accept="image/png, image/jpeg" />

        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector( 'input' );
    imgPhoto  = document.querySelector( '#foto' );
    
}

const events = () => {

    inputFile.addEventListener( 'change', ( event ) => {

        const file = event.target.files[0]; // guarda el 'file' en la posición 0 del arreglo 'files' que contiene el evento
        //console.log( file );
        uploadImage( file ).then( url => imgPhoto.src = url );

    });

}




export const init3 = () => {
    createInputFileHtml();
    events();
}