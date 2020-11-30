// Genera 10 mail tramite api e stampale in una listas


// Avvio e dichiaro vue nel container
var app = new Vue({
  el: "#root",
  data: {
    mailList: []
  },
  mounted: function () {

    for (let i = 0; i < 10; i++) {

     axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
     .then(risposta => {

       this.email = risposta.data.response;
       this.mailList.push(this.email)

      });
    }
   }
});

// per generare 10 mail metteremo all'interno di un ciclo for che ciclerà 10 volte un endpoint di un API che otterrà delle mail random.
// Ogni ciclo otteniamo una mail che andiamo a pushare all'interno di un array.
