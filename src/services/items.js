import axios from "axios";

const baseUrl= 'http://localhost:3001/api/items'

const getProducts = async ({search}) => {
    const response = await axios.get(`${baseUrl}?q=${search}`)
    return response.data
}

const getProduct = (id) => {
    const response = axios.get(`${baseUrl}/${id}`)
    return response.then(res => res.data)
}

export default { getProducts, getProduct }