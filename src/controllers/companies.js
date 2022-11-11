import { database } from "../database/database.js"

const getCompanies = (req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `SELECT
             RAZON_ID AS ID,
             RAZON_NOMBRE AS NOMBRE
             FROM razonsocial
            `,
            (err, companies) => {
                !err ? res.json({companies}) : res.json({err})
                conn.release()
            }
        )
    })
}

const postCompany=(req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `INSERT INTO razonsocial(
                RAZON_ID,
                RAZON_NOMBRE
            )
             VALUES(
                ${req.body.RAZON_ID},
                "${req.body.RAZON_NOMBRE}"
             )`,
            (err)=> {
                !err ? res.json({ ok: true, message: 'Datos almacenados con éxito' })
                :res.json({err})
                conn.release()
            }
        )
    })
}

const putCompany= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `UPDATE razonsocial
             SET
             RAZON_ID = ${req.body.RAZON_ID},
             RAZON_NOMBRE = "${req.body.RAZON_NOMBRE}"
             WHERE RAZON_NOMBRE = "${req.params.id}"`,
            (err)=> {
                !err ? res.json({ ok: true, message: 'Datos actualizados con éxito' })
                :res.json({err})
                conn.release()
            }
        )
    })
}

const deleteCompany= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `DELETE FROM razonsocial
             WHERE
             RAZON_NOMBRE = "${req.body.RAZON_NOMBRE}"
            `,
            (err)=> {
                !err ? res.json({ ok: true, message: "Datos eliminados" })
                :res.json({err})
                conn.release()
            }
        
        )
    })
}

export { getCompanies, postCompany, putCompany, deleteCompany }