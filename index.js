// 1. Importaciones
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require("./src/config/db")
const sessionManager = require('./src/config/session');

require('dotenv').config();

// 2. Middlewares

sessionManager(app);

app.use(express.static(__dirname + '/src/public'));

app.set('views', __dirname + '/src/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/src/views/partials');

app.use(express.urlencoded({ extended: true }));

connectDB()
app.use((req, res, next) => {
    res.locals.currentUser = req.session.currentUser;
    next();
});
// 3. Rutas
app.use("/movies", require("./src/routes/movies"))
app.use('/auth', require('./src/routes/auth.router'));
app.use('/user', require('./src/routes/user.router'));
app.use('/', require('./src/routes/index'));

// 4. Servidor 
app.listen(process.env.PORT, () => {
    console.log(
        `Servidor conectado en puerto http://localhost:${process.env.PORT}`,
    );
})
