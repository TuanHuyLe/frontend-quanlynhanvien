import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9090",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
});