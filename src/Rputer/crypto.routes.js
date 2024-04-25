import { Router } from "express";
import AxiosData from "../config/axios.js";

const CryptoRouter = Router()

CryptoRouter.get("/", async(req,res)=>{
    try {
        const data = await AxiosData()
        console.log("data : " , data)
        res.json(data)
    } catch (error) {
        console.error("error")
        console.error("Error al obtener las criptos", error)
        res.status(404).json({error : "error al obtener las criptos"})
    }
})

export default CryptoRouter;