import axiosClient from "./axiosClient";

const baseApi = {
    getBase: () => {
        const url = '/base';
        return axiosClient.get(url)
    }
}

export default baseApi;