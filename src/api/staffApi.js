import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/staffs");
};

const get = id => {
    return URL.get(`/staffs/${id}`);
};

const getlimit8 = () => {
    return URL.get(`/staffs?_start=0&_limit=8&_sort=date&_order=desc`);
};

const getdepartment = id => {
    return URL.get(`/staffs?department_id=${id}`);
};

const create = data => {
    return URL.post("/staffs", data);
};

const update = (id, data) => {
    return URL.put(`/staffs/${id}`, data);
};

const remove = id => {
    return URL.delete(`/staffs/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    getdepartment,
    getlimit8
};