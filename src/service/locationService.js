import axios from "axios";

export const getLocationListApi = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL_SERVER}/points`);
    return data;
};