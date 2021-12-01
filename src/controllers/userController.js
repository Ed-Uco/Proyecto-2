const User = require('./../models/User');

exports.getProfile = async (req, res) => {
    const username = req.params.user;
    const getUserData = await User.findOne({ name: username });
    res.render('user/profile', {
        data: getUserData,
    });
};

exports.viewEditUser = async (req, res) => {
    const userID = req.params.userID;

    const foundUser = await User.findById(userID);

    res.render('user/editUser', {
        data: foundUser,
    });
};

exports.editUser = async (req, res) => {
    // 1. EL ID DEL LIBRO

    const userID = req.params.userID;

    // 2. LOS NUEVOS CAMBIOS DEL FORMULARIO
    const name = req.body.name;
    const email = req.body.email;
    const imgUrl = req.body.imgUrl;


    // 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
    // findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
    const updatedUser = await User.findByIdAndUpdate(
        userID, // ID DEL DOCUMENTO
        { name, email, imgUrl },
        { new: true }, // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
    );

    req.session.currentUser = {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        imgUrl: updatedUser.imgUrl,
    };
    res.redirect(`/user/${updatedUser.name}`);
};
