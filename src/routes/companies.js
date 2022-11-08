import { Router } from "express"
import {
    getCompanies,
    postCompany,
    putCompany,
    deleteCompany
} from "../controllers/companies.js"

export const companyRouter = Router()
//routes
companyRouter.get('/companies', getCompanies)
companyRouter.post('/insert-company', postCompany)
companyRouter.put('/update-company/:id', putCompany)
companyRouter.delete('/delete-company', deleteCompany)