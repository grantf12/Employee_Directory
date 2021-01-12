import  axios from "axios";

const BASEURL = "https://randomuser.me/api/?nat=us&results=5"

function API() {
    return axios.get(BASEURL)
};

export default API;