import axios from "axios";

const url = "http://localhost:5000/"

export const GetFood = async()=> {
    const response = await axios.get(url)
    return response.data
}

export const GetFoodById = async (id:string) =>{
    const response = await axios.get(url+id)
    return response.data
}
