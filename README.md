# tienda-ropa
Prueba técnica relacionada con Vuejs y Vuetify

Clonar https://mitienda.moda/

1. Usé mis poderes super ninjas y mediante las Chrome DevTools pude observar el funcionamiento de la Api, para poder obtener los datos y ver cómo estaba construida la vista de dicho sitio.
1.1. Para ver la estructura de la página utilicé la pestaña elements y source. Encontré que hicieron uso de librerias para SEO, links a fuentes de Google y usaron vuetify como framework de diseño.
1.2 Para ver las respuetas HTTP usé la pestaña Network en donde mediante la interacción con el sitio pude observar las URL's que daban respuesta a mis peticiones:
  https://api.tissini.app/api/v1/login/client ----------------> Login
  https://api.tissini.app/api/v2/categories/343/products -----> Productos relacionados con la subcategoria 343
  https://api.tissini.app/api/v2/categories/1/products -------> Productos relacionados con la subcategoria 1
  https://api.tissini.app/api/v1/categories/sections ---------> Secciones que aparecen en la página de inicio
  https://api.tissini.app/api/v2/categories ------------------> Categoras y subcategorias
  
  Existen categorias, con diferentes niveles de subcategorias, estan compuesta por arreglos de objetos que a su vez contienen arreglos de objetos que representan las subcategorias de una categoria en particular.
  
2. Vuejs ofrece el uso de axios para poder obtener los datos que devuelven dichas URL. Cree dos archivos uno llamado main.js para obtener los datos de la categoria y otro llamado catalog.js para obtener los datos de las secciones.
2.1 Para mostrar los datos de las categorias usé un archivo llamado index.html, en él hice uso de varios v-for anidados para poder mostrar las imagenes de las categorias con sus subcategorias.
2.2 Para mostrar los datos de las secciones usé un archivo llamado catalog.html, en él hice uso de un v-for para mostrar las imagenes de las secciones.
2.3 Para mostrar los datos de los productos usé un archivo llamado product.html, en él mostré la data cruda obtebida de la URL mediante axios.




  
  

