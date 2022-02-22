import axios from "axios";

function hasPermission(url, data) {
    return getData(url, data);
}

function loggedUser(url) {
    return getData(url)
}

function getData(url) {
    return axios.get(url, getConfig())
        .then((response) => {
            return response.data;
        });
}

function getConfig() {
    return {
        headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
    };
}

const MANAGE = "manage"
let ID

export {
    MANAGE,
    ID
}

const baseUrl = "/hat/admin"

export const Perm = {

    hasPermission: (id, permissionName) => hasPermission(baseUrl + "/haspermission/" + id + "/" + permissionName),

    loggedUser: () => loggedUser(baseUrl + "/det"),

    setPerm: (id, permissionName, permissionVar, component) => setPerm(id, permissionName, permissionVar, component),

    userInfo: () => userInfo()
};

export default Perm;

function setPerm(id, permissionName, permissionVar) {
    Perm.hasPermission(id, permissionName).then(response => {
        permissionVar(response);
    }).catch(error => {
        console.log(error);
    });
}

function userInfo() {
    return Perm.loggedUser().then(response => {
        ID = response.id
        return response;
    })
}