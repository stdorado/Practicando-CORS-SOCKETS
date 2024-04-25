import axios from 'axios';
import dotenv from "dotenv"
dotenv.config()
export default async function AxiosData() {
    try {
        const response = await axios.get(
            process.env.URL_API,
            {
                headers: {
                    "X-CMC_PRO_API_KEY": process.env.URL_HEADER,
                },
            }
        );
        const json = response.data;
        console.log(json);
        return json;
    } catch (error) {
        
        console.error('Error al hacer la solicitud:', error);
        throw new Error('Error al obtener los datos de la API');
    }
}

AxiosData()