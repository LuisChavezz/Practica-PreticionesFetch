import { getJoke } from "./http-privider";

const body = document.body;
let btnNew, olList; // referencias html a necesitar

const createJokesHtml = () => {

    const html = `
        <h1 class="mt5">Chuck Norris Jokes</h1>
        <hr>

        <button class="btn btn-primary">New Joke</button>

        <ol class="mt-2 list-group">
        </ol>
    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append( divJokes );
}


const events = () => { // Events

    //Referencias html
    olList = document.querySelector('ol');
    btnNew = document.querySelector('button');

    btnNew.addEventListener( 'click', async() => {

        btnNew.disabled = true; // Dará una brvee pausa al botón bloqueandolo mientras se imprime el 'li'
        writeJoke( await getJoke() ); // Se invoca la función 'writeJoke' y se envía cómo parámetro la promesa 'getJoke'
        btnNew.disabled = false;
    });
}

const writeJoke = ( joke ) => { // (la función recibe )

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ joke.id }</b>: ${ joke.value }`;
    olItem.classList.add( 'list-group-item' );

    olList.append( olItem );
}


export const init = () => {
    createJokesHtml();
    events();
}

