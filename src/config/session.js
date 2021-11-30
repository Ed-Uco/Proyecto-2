const session = require('express-session');
const MongoStore = require('connect-mongo');

//Function of session
const sessionManager = (app) => {

    console.log("Activando y gestionando sesiones")
    //Seguridad y flexibilidad con servidores externos.
    app.set('trust proxy', 1);
    //Insert Session
    app.use(session({
            secret: process.env.SESSION,
            resave: true,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 1000 * 60 * 60,
            },
            store: MongoStore.create({
                mongoUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hptoy.mongodb.net/marvel`
            })
     }))
}

//Export

module.exports = sessionManager
