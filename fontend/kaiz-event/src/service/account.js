import {jwtDecode} from "jwt-decode"

 export const infoUser = () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken
    }
    return null;
}