

//import { init } from "./js/jokes-page";

//import { init2 } from "./js/usuarios-page";

import * as CRUD from './js/crud-provider';

//init();
//init2();

CRUD.getUser( 1 ).then( console.log );