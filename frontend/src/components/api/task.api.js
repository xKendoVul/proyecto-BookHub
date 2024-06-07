import axios from 'axios'

export const getAllBooks = () => {
    return axios.get('http://localhost:8000/api/books/')
};



