import axios from "axios"

class ItemsService {
    constructor() {
        this.api = axios.create({baseURL: `${process.env.REACT_APP_API_URL}/items`})
    }

    getAllItems = () => {
        return this.api.get("/getAllItems")
    }

    getOneItem = id => {
        return this.api.get(`/getOneItem/${id}`)
    }

    createItem = item => {
        return this.api.post(`/createItem`, item)
    }
}

const itemsService = new ItemsService()

export default itemsService