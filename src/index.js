import { server } from "./models/server.js"

//middlewares
server.middlewares()
//Database connection
server.dbConnect()
//routes
server.routes()
//listen PORT
server.listen()