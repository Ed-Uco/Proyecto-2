// 1. Importaciones
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require("./config/db")
const sessionManager = require('./config/session');

require('dotenv').config();
// 2. Middlewares
sessionManager(app);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({ extended: true }));

connectDB()
app.use((req, res, next) => {
    res.locals.currentUser = req.session.currentUser;
    next();
});
// 3. Rutas
app.use("/movies", require("./routes/movies"))
app.use('/auth', require('./routes/auth.router'));
app.use('/user', require('./routes/user.router'));
app.use('/', require('./routes/index'));

// 4. Servidor 
app.listen(process.env.PORT, () => {
    console.log(
        `Servidor conectado en puerto http://localhost:${process.env.PORT}`,
    );
})
