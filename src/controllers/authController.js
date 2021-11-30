// ./controllers/authController.js
const User = require('./../models/User');
const bcryptjs = require('bcryptjs');
exports.viewRegister = (req, res) => {
    res.render('auth/signup');
};
exports.register = async (req, res) => {
    //1. OBTENCION DE DATOS DEL FORMULARIOS
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
      console.log(username, email, password);
    //A) VALIDACION --VERIFICACION DE CAMPOS VACIOS.
    //VERIFICAR QUE USERNAME, EMAIL Y PASSWORD TENGAN CONTENIDO, ES DECIR QUE NO LLEGUEN VACIOS.
    if (!username || !email || !password) {
        res.render('auth/signup', {
            errorMessage:
                'Uno o más campos están vacíos. Revísalos nuevamente.',
        });
        return;
    }

    // B) VALIDACION - FORTALECIMIENTO DE PASSWORD.
    // VERIFIQUE EL PASSWORD TENGA 6 CARACTERES, MINIMO UN NUMERO Y UNA MAYUSCULA.
    //REGEX - CONJUNTO DE REGLAS QUE AUDITAN UN TEXTO PLANO
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!regex.test(password)) {
        res.render('auth/signup', {
            errorMessage:
                'Tu password debe de contener 6 caracteres, mínimo un número y una mayúscula',
        });
        return;
    }

    // 2. ENCRIPTACIÓN DE PASSWORD 🚩🚩🚩 IMPORTANTE IMPLEMENTARLO
    try {
        const salt = await bcryptjs.genSalt(10);
        const passwordEncriptado = await bcryptjs.hash(password, salt);
        const newUser = await User.create({
            username,
            email,
            passwordEncriptado,
        });

        console.log(newUser);

        //3 .REDIRECCION DE USUARIOS
        res.redirect('/auth/login');
    } catch (error) {
        console.log(error);
        res.status(500).render('auth/signup', {
            errorMessage:
                'Hubo un error con la validez de tu correo. Intenta nuevamente. No dejes espacios y usa minúsculas.',
        });
    }
};

exports.viewLogin = async (req, res) => {
    res.render('auth/login');
};

exports.login = async (req, res) => {
    try {
        // 1. OBTENCIÓN DE DATOS DEL FORMULARIO
        const email = req.body.email;
        const password = req.body.password;

        // 2. VALIDACIÓN DE USUARIO ENCONTRADO EN BD
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            res.render('auth/login', {
                errorMessage: 'Email o contraseña sin coincidencia',
            });
            return;
        }
        // 3. VALIDACIÓN DE CONTRASEÑA
        // COMPARAR LA CONTRASEÑA DEL FORMULARIO (1) VS LA CONTRASEÑA DE LA BASE DE DATOS (2)

        const verifiedPass = await bcryptjs.compareSync(
            password,
            foundUser.passwordEncriptado,
        );

        if (!verifiedPass) {
            res.render('auth/login', {
                errorMessage: 'Email o contraseña errónea. Intenta nuevamente',
            });
            return;
        }

        // 4. (PRÓXIMAMENTE) GENERAR LA SESIÓN
        //PERSISTENCIA DE IDENTIDAD
        req.session.currentUser = {
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
            mensaje: 'LO LOGRAMOS!',
        };
        // 5. REDIRECCIONAR AL HOME
        res.redirect('/users/profile');
    } catch (error) {
        console.log(error);
    }
};

exports.logout = async (req, res) => {
    req.session.destroy(error => {
        //SE EVALUA SI HUBO UN ERROR AL BORRAR LA COOKIE
        if (error) {
            console.log(error);
            return;
        }
        res.redirect('/');
    });
};
