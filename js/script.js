//estrapoliamo il metodo del framework che ci permetterà di creare l'app vue
const { createApp } = Vue ;
//creiamo un istanza di un'app Vue e la colleghiamo al nostro tag di contenitore
createApp( {
    //tutti i dati della applicazione
    data() {   
        return {
            userName: '',
            userSurname: '',
            mieClassi: 'red'
        }
    }
}).mount('#container')  