const User = require('./../models/User');

exports.getProfile = async (req, res) => {
    const username = req.params.user;
    console.log(username);
    const getUserData = await User.findOne({ name: username });
    res.render('user/profile', {
        data: getUserData,
    });
};

exports.viewEditUser = async (req, res) => {
    console.log('este es el req.params ´viewEditUser', req.params);

    const userID = req.params.userID;
    console.log(userID);
    const foundUser = await User.findById(userID);

    res.render('user/editUser', {
        data: foundUser,
    });
};

exports.editUser = async (req, res) => {
    // 1. EL ID DEL LIBRO
    console.log('este es el req.params EditUser', req.params);
    const userID = req.params.userID;

    // 2. LOS NUEVOS CAMBIOS DEL FORMULARIO
    const name = req.body.name;
    const email = req.body.email;
    const imgUrl = req.body.imgUrl;

    console.log(userID);
    console.log(name, email);

    // 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
    // findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
    const updatedUser = await User.findByIdAndUpdate(
        userID, // ID DEL DOCUMENTO
        { name, email, imgUrl },
        { new: true }, // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
    );

    console.log(updatedUser);
    req.session.currentUser = {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        imgUrl: updatedUser.imgUrl,
    };
    res.redirect(`/user/${updatedUser.name}`);
};
