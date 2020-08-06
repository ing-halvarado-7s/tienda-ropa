new Vue({
  el: '#app',
  data () {
    return {
      url:'https://api.tissini.app',
      info: null
    }
  },
  mounted () {
    axios
    .get('https://api.tissini.app/api/v2/categories/1/products')
      .then(response => (this.info = response))
  }
})



// new Vue({
//     el: '#app',
//     // vuetify: new Vuetify(),
//     data () {
//       return {
//         url:'https://api.tissini.app',
//         info: null
//       }
//     },
//     mounted () {
//       axios
//         // .get('https://api.tissini.app/api/v1/login/client')
//       // .get('https://api.tissini.app/api/v2/categories/343/products')
//         // .get('https://api.tissini.app/api/v2/categories/1/products')
//         // .get('https://api.tissini.app/api/v1/categories/sections') //Secciones
//            //Categorias
//         .then(response => (this.info = response.data))
//     }
//   });

  Vue.config.devtools = true;



// var app = new Vue({
//     el:"#app",
//     data(){
//         return{
//             respuesta: {},
//         }//fin de return de data
//     },//fin de data
//     methods: {
//         obtenerData(){
//             // axios.get('https://in.hotjar.com/api/v2/client/sites/1050891/visit-data?sv=6')
//             axios.get('https://api.tissini.app/api/v2/categories')
//                 .then(response=>{
//                     this.respuesta = response.data;
//                 })
//                 .catch(error=>{
//                     console.error(error);
//                 })
//         }//Fin de obtenerData()
//     }, //fin de methods
//     computed: {
//         parsedResponse(){
//             return JSON.stringify(this.respuesta);
//         }
//     },
// })