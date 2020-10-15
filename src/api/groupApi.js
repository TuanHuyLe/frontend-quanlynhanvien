import URL from "./axiosHttp";

const getAll = async () => {
    return URL.get("/api/enao/group");
};

const get = id => {
    return URL.get(`/api/enao/group/{id}`);
};

const create = data => {
    return URL.post(`/api/enao/group`, data);
};

const update = (data) => {
    return URL.put(`/api/enao/group`, data);
};

const remove = id => {
    return URL.delete(`/api/enao/group/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};