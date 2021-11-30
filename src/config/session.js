const session = require('express-session');
const MongoStore = require('connect-mongo');

//Function of session
const sessionManager = app => {
    //Seguridad y flexibilidad con servidores externos.
    app.set('trust proxy', 1);
    //Insert Session
    app.use(
        session({
            secret: 'secret',
            resave: true,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 1000 * 60 * 60,
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI,
            }),
        }),
    );
    console.log('session manager test')
};

//Export

module.exports = sessionManager;
