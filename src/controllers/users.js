import { database } from "../database/database.js"

const getUsers=(req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `SELECT
             PSEUDO_ID AS ID,
             PSEUDO_NOMBRE AS NOMBRE,
             PSEUDO_USUARIO AS USUARIO,
             PSEUDO_CONTRASENA AS CONTRASENA
             FROM pseudosocios
             `,
            (err, pseudosocios)=>{
                !err ? res.json({pseudosocios}) : res.json({err})
                conn.release()
            }
        )
    })
}

const postUser=(req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
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
            (err)=> {
                !err ? res.json({ ok: true, message: 'Datos almacenados con éxito' })
                : res.json({err})
                conn.release()
            }
        )
    })
}

const putUser= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `UPDATE pseudosocios
             SET
             PSEUDO_ID = ${req.body.PSEUDO_ID},
             PSEUDO_NOMBRE = "${req.body.PSEUDO_NOMBRE}",
             PSEUDO_USUARIO = "${req.body.PSEUDO_USUARIO}",
             PSEUDO_CONTRASENA = "${req.body.PSEUDO_CONTRASENA}"
             WHERE PSEUDO_USUARIO = "${req.params.id}"`,
            (err)=> {
                !err ? res.json({ ok: true, message: 'Datos actualizados con éxito' })
                :res.json({err})
                conn.release()
            }
        )
    })
}

const deleteUser= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `DELETE FROM pseudosocios
             WHERE
             PSEUDO_USUARIO = "${req.body.PSEUDO_USUARIO}"
            `,
            (err)=> {
                !err ? res.json({ ok: true, message: "Datos eliminados" })
                :res.json({err})
                conn.release()
            }
        
        )
    })
}
const userLogin = (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `SELECT
             PSEUDO_USUARIO,
             PSEUDO_CONTRASENA
             FROM pseudosocios
             WHERE
             PSEUDO_USUARIO = "${req.body.PSEUDO_USUARIO}"
             AND
             PSEUDO_CONTRASENA = "${req.body.PSEUDO_CONTRASENA}"
            `,
            (err, data)=> {
                !err ? res.json({data}) : res.json({err})
                conn.release()
            }
        )
    })
}

export { userLogin, getUsers, deleteUser, putUser, postUser }