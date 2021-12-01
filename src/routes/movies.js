// 1. Importaciones.

const express = require("express")
const router = express.Router()

const movieController = require("./../controllers/movieController")

// 2. Manejo de ruteo con base URL.

// Create.....
// Crear una película, vista para ver el formulario.
router.get("/create", movieController.viewCreateMovie)
// Crear una película, ruta para el formulario, para recibir los datos
router.post("/create", movieController.createMovie)

// Read.....
// Lectura de las películas creadas.
router.get("/", movieController.getAllMovies)
// Lectura de una película específica
router.get("/:movieID", movieController.getMovie)

// Edit.....
// Editar la información de una película.
router.get("/:movieID/edit", movieController.viewEditMovie)
router.post("/:movieID/edit", movieController.editMovie)

// Delete.....
// Borrar una película
router.post("/:movieID/delete", movieController.deleteMovie)

// 3. Exportación

module.exports = router