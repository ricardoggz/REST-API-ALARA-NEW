import { database } from "../database/database.js"

const getDetectors=(req, res)=>database.config.query(
    `SELECT 
     DETECTOR_ID AS ID,
     DETECTOR_SERIE AS SERIE,
     DETECTOR_MARCA AS MARCA,
     DETECTOR_TIPO AS TIPO,
     DETECTOR_MODELO AS MODELO,
     detectores.PSEUDO_ID AS PSEUDO_ID,
     pseudosocios.PSEUDO_NOMBRE AS PSEUDOSOCIO,
     detectores.RAZON_ID AS RAZON_ID,
     razonsocial.RAZON_NOMBRE AS RAZON_SOCIAL,
     detectores.DETECTOR_ULT_SERVICIO AS ULT_SERVICIO,
     detectores.DETECTOR_PROX_SERVICIO AS PROX_SERVICIO
     FROM detectores
     INNER JOIN pseudosocios ON pseudosocios.PSEUDO_ID = detectores.PSEUDO_ID
     INNER JOIN razonsocial ON razonsocial.RAZON_ID = detectores.RAZON_ID
     `,
    (err, admins)=> !err ? res.json({admins}) : res.json({err})
)

const postDetector=(req, res)=>database.config.query(
    `INSERT INTO detectores(
        DETECTOR_ID,
        DETECTOR_SERIE,
        DETECTOR_MARCA,
        DETECTOR_TIPO,
        DETECTOR_MODELO,
        DETECTOR_ULT_SERVICIO,
        DETECTOR_PROX_SERVICIO,
        PSEUDO_ID,
        RAZON_ID
    )
     VALUES(
        ${req.body.DETECTOR_ID},
        "${req.body.DETECTOR_SERIE}",
        "${req.body.DETECTOR_MARCA}",
        "${req.body.DETECTOR_TIPO}",
        "${req.body.DETECTOR_MODELO}",
        "${req.body.DETECTOR_ULT_SERVICIO}",
        "${req.body.DETECTOR_PROX_SERVICIO}",
        "${req.body.PSEUDO_ID}",
        "${req.body.RAZON_ID}"
     )`,
    (err)=> !err ? res.json({
                ok: true,
                message: 'Datos almacenados con éxito'
            })
            : res.json({err})
)

const putDetector= (req, res)=> database.config.query(
    `UPDATE detectores
     SET
     DETECTOR_ID = ${req.body.DETECTOR_ID},
     DETECTOR_SERIE = "${req.body.DETECTOR_SERIE}",
     DETECTOR_MARCA = "${req.body.DETECTOR_MARCA}",
     DETECTOR_TIPO = "${req.body.DETECTOR_TIPO}",
     DETECTOR_MODELO = "${req.body.DETECTOR_MODELO}",
     DETECTOR_ULT_SERVICIO = "${req.body.DETECTOR_ULT_SERVICIO}",
     DETECTOR_PROX_SERVICIO = "${req.body.DETECTOR_PROX_SERVICIO}",
     PSEUDO_ID = "${req.body.PSEUDO_ID}",
     RAZON_ID = "${req.body.RAZON_ID}"
     WHERE DETECTOR_ID = "${req.params.id}"`,
    (err)=> !err ? res.json({
                ok: true,
                mssage: 'Datos actualizados con éxito'
            })
            : res.json({err})
)

const deleteDetector= (req, res)=> database.config.query(
    `DELETE FROM detectores
     WHERE
     DETECTOR_ID = "${req.body.DETECTOR_ID}"
    `,
    (err)=> !err ? res.json({
                ok: true,
                message: "Datos eliminados" 
            })
            : res.json({err})

)

export { getDetectors, postDetector, putDetector, deleteDetector }