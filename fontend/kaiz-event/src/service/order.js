import axios from "axios";

export const getListOrder = async (name) => {
  const res=(await axios.get(`http://localhost:8080/api/regis/history?username=${name}`)).data
    return res;
}
export const getListTicket=async (id)=>{
    const res=(await axios.get(`http://localhost:8080/api/ticket/list?id=${id}`)).data
    console.log(res)
    return res;
}