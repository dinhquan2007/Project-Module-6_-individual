import axios from "axios";

export const getAllTypeTicketInEvent= async (id)=>{
    const res=await axios.get(`http://localhost:8080/api/area/list/${id}`)
    return res.data
}