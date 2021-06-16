/* Para requerir express y para ejecutar express */
const express= require ("express");
const app = express ();
/* Middleware */
app.use(express.static('public'))


/* Para generar una ruta absoluta para SendFile usamos Path */
const path = require('path')
app.get('/', (req,res) =>{
    res.sendFile(path.join (__dirname, '/views/home.html'))
})

/* Es para levantar el servidor */
app.listen(3500, () =>console.log('Servidor de Mercado Liebre'));

/* Routing y response: es para escribir la ruta "/"" y
y para enviar una respuesta al cliente  */
app.get ('/',(req, res)=>{
    res.send('Home')
});
