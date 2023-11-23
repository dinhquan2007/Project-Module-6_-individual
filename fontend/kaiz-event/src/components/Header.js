import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {infoUser} from "../service/account";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function Headers() {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [username, setUsername] = useState(null);
    const getUsername = () => {
        const res = infoUser();
        if (res != null) {
            setUsername(res.sub);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
    }
    useEffect(() => {
        getUsername()
    }, [jwtToken])

    return (
        <nav className="navbar navbar-dark bg-dark custom-navbar">
            <div className="container-fluid d-flex">
                <Link className="navbar-brand" to="/">
                    <h2 className="p-2"
                        style={{color: "black", display: "inline-block", background: "yellow"}}>KAIZ</h2><h2
                    className="p-2" style={{color: "yellow", display: "inline-block", background: "black"}}>EVENT</h2>
                </Link>
                {jwtToken ? (
                    <div className="dropstart btn-group">
                        <button type="button" className="btn dropdown-toggle text-light " data-bs-toggle="dropdown"
                                id="dropdownUser1" aria-expanded="false">
                            {username}
                        </button>
                        <ul className="dropdown-menu text-lg-start bg-light" aria-labelledby="dropdownUser1">
                            <li><Link className="dropdown-item bg-light mt-1" to={`/info`}>Thông tin</Link></li>
                            <li><Link className="dropdown-item bg-light mt-1" to={`/history`}>Lịch sử đặt vé</Link></li>
                            <li><p className="dropdown-item bg-light mt-1" onClick={() => handleLogout()}>Đăng xuất</p></li>
                        </ul>
                    </div>
                ) : (
                    <div className="btn-group">
                        <Link className="btn btn-outline-primary m-1" to="/login">Đăng nhập</Link>
                        <Link className="btn btn-outline-primary m-1" to="/signup">Đăng ký</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Headers;