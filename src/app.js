import express from "express"
import { Server } from "socket.io"
import http from "http"
import criptoHandlers from "./handlers/cripto.handlers.js"
import CriptoRouter from "./Rputer/crypto.routes.js"
import cors from "cors"
const app = express()
const server = http.createServer(app)
app.use(express.static('public'));

const io = new Server(server)
criptoHandlers(io)

app.use(cors({
    origin: "http://127.0.0.1:5500" 
}));
app.use("/crypto",CriptoRouter)
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Escuchando el puerto 5000")
})