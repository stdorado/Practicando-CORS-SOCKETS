import AxiosData from "../config/axios.js";
function criptoEmitts(io) {
    io.on("connection", (client) => {
        client.on("Data", () => {
            console.log("Bienvenido");
            const data = AxiosData()
            client.emit('cryptoData',data)
        });
        client.on("Disconnect", () => {
            console.log("disconnect data");
        });
    });
}

export default criptoEmitts;
