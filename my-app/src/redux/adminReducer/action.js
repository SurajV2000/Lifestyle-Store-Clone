import axios from "axios"



export const addData=(obj)=>{
    axios.post(`http://localhost:8080/${obj.gender}`,obj)
    
}