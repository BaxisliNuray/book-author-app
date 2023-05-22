import { BASE_URL } from "./base_url";
import axios from "axios"
//get all Authors

export const getAllAuthors = async () => {
    let globalData
    await axios.get(`${BASE_URL}/authors`)
        .then(res => {
            globalData = res.data
        })
    return globalData
}

//get author by id

export const getAuthorbyID = async (ID) => {
    let globalData
    await axios.get(`${BASE_URL}/authors/${ID}`
        .then(resp => {
            globalData = resp.data
        }))
    return globalData
}

// delete author by id
export const deleteAuthorbyID = async (ID) => {
    let deleteData
    await axios.get(`${BASE_URL}/authors/${ID}`
        .then(resp => {
            deleteData = resp.data
        }))
    return deleteData
}

// post
export const postAuthor=async(payload)=>{
axios.post(`${BASE_URL}/authors`,payload)
}

