
const urlCrud = 'https://reqres.in/api/users';

const getUser = async( id ) => {

    const response = await fetch( `${ urlCrud }/${ id }` );
    const { data } = await response.json();

    return data;

}

const createUser = async( user ) => {

    const response = await fetch( urlCrud, {
        method: 'POST',
        body: JSON.stringify( user ), // convertirÃ¡ el objeto a enviar en una cadena para su envio.
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();

}

const updateUser = async( id, user ) => {

    const response = await fetch( `${ urlCrud }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( user ), // convertirÃ¡ el objeto a enviar en una cadena para su envio.
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();

}

const deleteUser = async( id ) => {

    const response = await fetch( `${ urlCrud }/${ id }`, {
        method: 'DELETE'
    });

    return ( response.ok ) ? 'Usuario eliminado.' : 'Error al intentar eliminar usuario.';

}


export{
    getUser,
    createUser,
    updateUser,
    deleteUser
}