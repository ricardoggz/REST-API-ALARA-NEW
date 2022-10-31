import { database } from "../database/database.js"

const getUsers=(req, res)=>database.config.query(
    `SELECT
     PSEUDO_ID AS ID,
     PSEUDO_NOMBRE AS NOMBRE,
     PSEUDO_USUARIO AS USUARIO
     FROM pseudosocios
     `,
    (err, pseudosocios)=> !err ? res.json({pseudosocios}) : res.json({err})
)

const postUser=(req, res)=>database.config.query(
    `INSERT INTO pseudosocios(
        PSEUDO_ID,
        PSEUDO_NOMBRE,
        PSEUDO_USUARIO,
        PSEUDO_CONTRASENA
    )
     VALUES(
        ${req.body.PSEUDO_ID},
        "${req.body.PSEUDO_NOMBRE}",
        "${req.body.PSEUDO_USUARIO}",
        "${req.body.PSEUDO_CONTRASENA}"
     )`,
    (err)=> !err ? res.json({
                ok: true,
                message: 'Datos almacenados con éxito'
            })
            : res.json({err})
)

const putUser= (req, res)=> database.config.query(
    `UPDATE pseudosocios
     SET
     PSEUDO_ID = ${req.body.PSEUDO_ID},
     PSEUDO_NOMBRE = "${req.body.PSEUDO_NOMBRE}",
     PSEUDO_USUARIO = "${req.body.PSEUDO_USUARIO}",
     PSEUDO_CONTRASENA = "${req.body.PSEUDO_CONTRASENA}"
     WHERE PSEUDO_USUARIO = "${req.params.id}"`,
    (err)=> !err ? res.json({
                ok: true,
                mssage: 'Datos actualizados con éxito'
            })
            : res.json({err})
)

const deleteUser= (req, res)=> database.config.query(
    `DELETE FROM pseudosocios
     WHERE
     PSEUDO_CONTRASENA = "${req.body.PSEUDO_CONTRASENA}"
    `,
    (err)=> !err ? res.json({
                ok: true,
                message: "Datos eliminados" 
            })
            : res.json({err})

)
const userLogin = (req, res)=> database.config.query(
    `SELECT
     PSEUDO_USUARIO,
     PSEUDO_CONTRASENA
     FROM pseudosocios
     WHERE
     PSEUDO_USUARIO = "${req.body.PSEUDO_USUARIO}"
     AND
     PSEUDO_CONTRASENA = "${req.body.PSEUDO_CONTRASENA}"
    `,
    (err, data)=> !err ? res.json({data}) : res.json({err})
)

export { userLogin, getUsers, deleteUser, putUser, postUser }