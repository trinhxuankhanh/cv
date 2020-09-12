import axiosClient from "./axiosClient";

const menuApi = {
    getMenu: () => {
        const url = '/menu';
        return axiosClient.get(url)
    }
}

export default menuApi;