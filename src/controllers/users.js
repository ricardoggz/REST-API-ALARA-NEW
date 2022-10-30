import { database } from "../database/database.js"

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

export { userLogin }