//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//estrapoliamo il metodo del framework che ci permetterà di creare l'app vue
const { createApp } = Vue ;
//creiamo un istanza di un'app Vue e la colleghiamo al nostro tag di contenitore
createApp( {
    //tutti i dati della applicazione
    data() {   
        return {
            message: 'This is my first title with Vue, i am really scared!!!',
            imgSrc: 'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png'
        };
    }
}).mount('#container');  