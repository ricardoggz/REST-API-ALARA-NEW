import { database } from "../database/database.js"

const getAdmins =(req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `SELECT
             ADMIN_ID AS ID,
             ADMIN_NOMBRE AS NOMBRE,
             ADMIN_USUARIO AS USUARIO
             FROM admins
            `,
            (err, admins)=>{
                !err ? res.json({admins}) : res.json({err})
                conn.release()
            }
        )
    })
}

const postAdmin = (req, res)=>{
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `INSERT INTO admins(
                ADMIN_ID,
                ADMIN_NOMBRE,
                ADMIN_USUARIO,
                ADMIN_CONTRASENA
            )
             VALUES(
                ${req.body.ADMIN_ID},
                "${req.body.ADMIN_NOMBRE}",
                "${req.body.ADMIN_USUARIO}",
                "${req.body.ADMIN_CONTRASENA}"
             )`,
             (err)=> {
                !err ? res.json({ ok: true, message: 'Datos almacenados con éxito' })
                : res.json({err})
                conn.release()
            }
        )
    })
}

const putAdmin= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `UPDATE admins
             SET
             ADMIN_ID = ${req.body.ADMIN_ID},
             ADMIN_NOMBRE = "${req.body.ADMIN_NOMBRE}",
             ADMIN_USUARIO = "${req.body.ADMIN_USUARIO}",
             ADMIN_CONTRASENA = "${req.body.ADMIN_CONTRASENA}"
             WHERE ADMIN_USUARIO = "${req.params.id}"`,
            (err)=> {
                !err ? res.json({ ok: true, message: 'Datos actualizados con éxito' })
                : res.json({err})
                conn.release()
            }
        )
    })
   
}

const deleteAdmin= (req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `DELETE FROM admins
             WHERE
             ADMIN_CONTRASENA = "${req.body.ADMIN_CONTRASENA}"
            `,
            (err)=> {
                !err ? res.json({ ok: true, message: "Datos eliminados"})
                : res.json({err})
                conn.release()
            }
        
        )
    })
}

const adminLogin=(req, res)=> {
    database.config.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(
            `SELECT
             ADMIN_USUARIO,
             ADMIN_CONTRASENA
             FROM admins
             WHERE
             ADMIN_USUARIO = "${req.body.ADMIN_USUARIO}"
             AND
             ADMIN_CONTRASENA = "${req.body.ADMIN_CONTRASENA}"
            `,
            (err, data)=> {
                !err ? res.json({data}) : res.json({err})
                conn.release()
            }
        )
    })
}

export { getAdmins, postAdmin, putAdmin, deleteAdmin, adminLogin }