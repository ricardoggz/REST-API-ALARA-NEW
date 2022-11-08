import { database } from "../database/database.js"

const getCompanies = (req, res)=>database.config.query(
    `SELECT
     RAZON_ID AS ID,
     RAZON_NOMBRE AS NOMBRE
     FROM razonsocial
    `,
    (err, companies) => !err ? res.json({companies}) : res.json({err})
)

const postCompany=(req, res)=>database.config.query(
    `INSERT INTO razonsocial(
        RAZON_ID,
        RAZON_NOMBRE
    )
     VALUES(
        ${req.body.RAZON_ID},
        "${req.body.RAZON_NOMBRE}"
     )`,
    (err)=> !err ? res.json({
                ok: true,
                message: 'Datos almacenados con éxito'
            })
            : res.json({err})
)

const putCompany= (req, res)=> database.config.query(
    `UPDATE razonsocial
     SET
     RAZON_ID = ${req.body.RAZON_ID},
     RAZON_NOMBRE = "${req.body.RAZON_NOMBRE}"
     WHERE RAZON_NOMBRE = "${req.params.id}"`,
    (err)=> !err ? res.json({
                ok: true,
                mssage: 'Datos actualizados con éxito'
            })
            : res.json({err})
)

const deleteCompany= (req, res)=> database.config.query(
    `DELETE FROM razonsocial
     WHERE
     RAZON_NOMBRE = "${req.body.RAZON_NOMBRE}"
    `,
    (err)=> !err ? res.json({
                ok: true,
                message: "Datos eliminados" 
            })
            : res.json({err})

)

export { getCompanies, postCompany, putCompany, deleteCompany }