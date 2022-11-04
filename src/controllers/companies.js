import { database } from "../database/database.js"

const getCompanies = (req, res)=>database.config.query(
    `SELECT
     RAZON_ID AS ID,
     RAZON_NOMBRE AS NOMBRE
     FROM razonsocial
    `,
    (err, companies) => !err ? res.json({companies}) : res.json({err})
)

export { getCompanies }