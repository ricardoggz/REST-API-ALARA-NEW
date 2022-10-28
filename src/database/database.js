import mysql from "mysql"
import { config } from "./consts.js"

class Database{
    constructor(){
        this.config= mysql.createConnection(config)
    }
    connection(){
        return this.config.connect((err)=>{
            !err ? console.log('Database conected')
            : console.log(err)
        })
    }
}

export const database= new Database();