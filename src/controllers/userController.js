exports.getProfile = (req, res) => {
    res.render('user/profile');
};
const User = require('./../models/User')

exports.viewEditUser = async (req, res) => {
    console.log(req.params);

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

    console.log(userID);
    console.log(name, email);

    // 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
    // findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
    const updatedUser = await User.findByIdAndUpdate(
        userID, // ID DEL DOCUMENTO
        { name, email },
        { new: true }, // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
    );

    console.log(updatedUser);

    res.redirect(`/user/${updatedUser._id}`);
};