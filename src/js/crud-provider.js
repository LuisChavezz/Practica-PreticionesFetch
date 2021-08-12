
const urlCrud = 'https://reqres.in/api/users';

const getUser = async( id ) => {

    const response = await fetch( `${ urlCrud }/${ id }` );
    const { data } = await response.json();

    return data;

}

export{
    getUser
}