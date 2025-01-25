// Seleziono gli elementi di output

const containerCard = document.querySelector('.container');

// Setto l'endpoint e i parametri relativi

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Lancio la richiesta AJAX verso l'API per ottenere l'ggetto di risposta

axios.get(endpoint)
.then(responseObj => {
    // codice da eseguire in caso di successo
    console.log(responseObj);


})
