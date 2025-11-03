import axios from "axios";

const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY;

//Creates a custom instance of Axios
export default axios.create({

    //the base URL for all requests made with this Axios instance.
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: RAWG_KEY,
    }
})