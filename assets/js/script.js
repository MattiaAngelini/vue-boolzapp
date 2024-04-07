
const { createApp } = Vue;
createApp({
  data() {
    return {
      newMessage:'',
      userActive: 0,
      userMessageValue: '',
      userSearchValue:'',
      dropdownVisible: false,
     
      contacts: [{
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
      ],
    };
  },
  methods: {
    accountActive(index) {
      this.userActive = index;
      console.log(this.userActive)
    },

    sendMessage() {
      // Aggiungiamo il messaggio solo se è stato digitato qualcosa, 
      // quindi diverso da nulla
      if (this.userMessageValue !== '') {
        // Creo costante per nuovo messaggio inserito 
        // che conterrà data corrente, valore inserito nella input,
        // e status sent per attribuzione classe
        let newMessage = {
          date: new Date().toLocaleString(),
          message: this.userMessageValue,
          status: 'sent'
        };
        // Aggiungiamo il nuovo messaggio alla lista dei messaggi del contatto attivo
        this.contacts[this.userActive].messages.push(newMessage);
        
     
        // Dopo aver inviato messaggio, nella stessa funzione 3 secondi dopo,
        // faccio comparire messaggio di risposta con 'ok'
        setTimeout(() => {
          const replyMessage = {
            date: new Date().toLocaleString(),
            message: 'ok',
            status: 'received'
          };
          // Aggiungiamo risposta alla lista dei messaggi del contatto attivo.
          this.contacts[this.userActive].messages.push(replyMessage);
  
          // 3 secondi di intervallo
        }, 3000);
        // Reset della barra di input dopo l'invio del messaggio
        this.userMessageValue = '';
      
      }
    },

    //Dopo aver creato keyup e collegato v-model alla input,
    //creo una funzione per filtrare il valore inserito dall'user,
    //il cui nome contiene le lettere inserite
    filterSearch(){
      //for each per iterare tra tutti i nomi
			this.contacts.forEach((contact) => {  
        //creo variabile che contiene solo il nome iterato
				filteredName = contact.name.toLowerCase();
        //cambio valore di visible con includes (che restituisce true o false)
				contact.visible = filteredName.includes(this.userSearchValue);
			})      
		},
   
    //per la funzione cancella msg,elimino messaggio pushato da funzione precedente,
    //passando come argomento l'indice alla funzione attivabile al click 
    deleteMessage(messageIndex){
      this.contacts[this.userActive].messages.splice(messageIndex,1)
    },

  },

}).mount('#app');


