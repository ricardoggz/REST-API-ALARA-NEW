import { Router } from "express"
import { getAdmins, postAdmin, putAdmin, deleteAdmin, adminLogin } from "../controllers/admins.js"

export const adminRouter = Router()
//routes
adminRouter.get('/admins', getAdmins)
adminRouter.post('/admin-login', adminLogin)
adminRouter.post('/insert-admin', postAdmin)
adminRouter.put('/update-admin/:id', putAdmin)
adminRouter.delete('/delete-admin', deleteAdmin)
