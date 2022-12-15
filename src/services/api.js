import axios from "axios";

//  09784055/json/

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
});

export default api;