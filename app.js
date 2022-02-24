const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials');


//servir contenido publico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
      name: 'Luis Salazar',
      title: 'Curso Node'
  });
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'/public/generic.html');
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})