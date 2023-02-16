import {API_URL, API_KEY} from ".";
import axios from "axios";

export async function getAllData() {
    const res = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    return await res.data;
}

export async function getOneField(id) {
    const res = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    return await res.data;
}
