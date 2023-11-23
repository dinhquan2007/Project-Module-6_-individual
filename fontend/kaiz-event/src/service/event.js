import axios from "axios";

export const  getList= async (name,location,artist,page)=>{
    const res= (await axios.get(`http://localhost:8080/api/event/list?name_like=${name}&location_like=${location}&artist_like=${artist}&page=${page}`)).data
    console.log(res)
    return res;
}
export  const getEventDetail = async (id)=>{
    const res=(await axios.get(`http://localhost:8080/api/event/detail/${id}`))
    return res;
}
export const addRegistration=async (cart,user)=>{
    const res=await  axios.post(`http://localhost:8080/api/regis/create?username=${user}`,cart)
    return res;
}
