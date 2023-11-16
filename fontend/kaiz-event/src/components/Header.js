import {Link} from "react-router-dom";

function Headers(){
    return(
        <nav className="navbar navbar-dark bg-dark custom-navbar">
        <div className="container-fluid d-flex">
            <Link className="navbar-brand" to="/">
                <h2 className="p-2" style={{color:"black",display:"inline-block",background:"yellow"}}>KAIZ</h2><h2 className="p-2" style={{color:"yellow",display :"inline-block",background:"black"}}>EVENT</h2>
            </Link>

            {/*<form className="d-flex">*/}
            {/*    <div className="input-group">*/}
            {/*        <input className="form-control me-2" type="search" placeholder="Tìm kiếm..." aria-label="Search"/>*/}
            {/*            <button className="btn btn-outline-light align-self-center" type="submit">Tìm kiếm</button>*/}
            {/*    </div>*/}
            {/*</form>*/}
            <Link className="btn btn-outline-primary" to="/login">Đăng nhập</Link>
        </div>
    </nav>
)
}
export default Headers;