import axios from "axios"



export const addData=(gender)=>{
    axios.post(`http://localhost:8080/${gender}`)
}