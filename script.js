// Seleziono gli elementi di output

const containerCard = document.querySelector('.container');

// Setto l'endpoint e i parametri relativi

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Lancio la richiesta AJAX verso l'API per ottenere l'ggetto di risposta

axios.get(endpoint)
.then(responseObj => {
    // codice da eseguire in caso di successo
    const pictures = responseObj.data;
    // console.log(pictures);

    for(let i = 0; i < pictures.length; i++){
        let picture = pictures[i];
        console.log(picture);
        // Destrutturo l'oggetto
        const {title, date, url} = picture;

        // Creo le card

        container.innerHTML += `
        <div class="card">
        <div class="img-box">
            <span class="pin"><img src="./img/pin.svg" alt=""></span>
            <img src="${url}" alt="">
        </div>

        <div class="caption">
            <p class="data">${date}</p>
            <h2 class="title">${title}</h2>
        </div>
        `;
        
    }
    


})
