import URL from "./axiosHttp";

const getAll = async () => {
    return URL.get("/api/enao/position");
};

// const get = id => {
//     return URL.get(`/api/enao/user/${id}`);
// };

// const create = data => {
//     return URL.post("/api/enao/user", data);
// };

// const update = (data) => {
//     return URL.put(`/api/enao/user`, data);
// };

// const remove = id => {
//     return URL.delete(`/api/enao/user/${id}`);
// };

export default {
    getAll,
    // get,
    // create,
    // update,
    // remove
};