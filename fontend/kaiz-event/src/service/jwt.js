import axios from "axios";

export const login=async (authenticationRequest)=>{
const res=await axios.post(`http://localhost:8080/authenticate`, authenticationRequest);
return res;
}