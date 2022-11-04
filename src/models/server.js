import cors from "cors"
import express, { Router } from "express"
import dotenv from "dotenv"
import { database } from "../database/database.js"
import { adminRouter } from "../routes/admins.js"
import { userRouter } from "../routes/users.js"
import { companyRouter } from "../routes/companies.js"

dotenv.config()

class Server{
    constructor(){
        this.app= express()
    }
    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    listen(){
        return this.app.listen(process.env.PORT || 8080,()=>{
            return console.log('SERVER RUNNING')
        })
    }
    dbConnect(){
        return database.connection()
    }
    routes(){
        this.app.use('/', adminRouter, userRouter, companyRouter )
    }
}
export const server = new Server()