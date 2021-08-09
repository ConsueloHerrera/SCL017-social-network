import { displayRespectiveTemplate } from './lib/router.js';
// Esta función es la que inicia la SPA

const init = () => {
  displayRespectiveTemplate(window.location.hash);
  window.addEventListener('hashchange', () => {
    displayRespectiveTemplate(window.location.hash);
  });
};

window.addEventListener('load', init);
// La propiedad window. location devuelve un objeto de tipo Location con información
// relacionada con la URL del documento actual. Devuelve un string con la url completa.
// hash is the part of the URL from the # on (or an empty string if there is no #),
// while href is a string representation of the whole URL.
