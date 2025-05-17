import api from "./Axios";


export const book = () => api.get('/book');
