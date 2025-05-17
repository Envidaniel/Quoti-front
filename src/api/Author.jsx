
import axios from 'axios';

const API_URL = 'https://quoti.onrender.com/api/author'; 

export const createAuthor = (data) => axios.post(API_URL, data);

export const getAuthors = (params) => axios.get(API_URL, { params });

export const getAuthorById = (id) => axios.get(`${API_URL}/${id}`);

export const updateAuthor = (id, data) => axios.patch(`${API_URL}/${id}`, data);

export const deleteAuthorById = (id) => axios.delete(`${API_URL}/${id}`);

export const deleteAllAuthors = () => axios.delete(API_URL);
