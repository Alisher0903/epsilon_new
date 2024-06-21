import axios from "axios";

export const byId = (id) => document.getElementById(id);
export const byIdVal = (id) => byId(id) ? byId(id).value : "";

export const url = "http://128.199.103.145:8080/";


export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");

export const getFile = url + "user/getImage/";

export const getUser = (setUser) => {
    axios.get(url + "user/admin", config)
        .then(res => setUser(res.data.body))
        .catch(() => console.log("user kelmadi"))
}