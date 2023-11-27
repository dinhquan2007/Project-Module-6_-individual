import 'bootstrap/dist/css/bootstrap.min.css'
import Headers from "./Header";
import {useEffect, useState} from "react";
import {getList} from "../service/event";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {parseDate} from "../service/parseDate";

function Home() {
    const [listEvent, setListEvent] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [artist, setArtist] = useState("");
    const [page, setPage] = useState(0);
    const [totalPage,setTotalPage]=useState(0)
    const list = async () => {
        const res = await getList(name, location, artist, page)
        setListEvent(res.content)
        setTotalPage(res.totalPages)
    }
    const handleSearch = () => {
        list()
    }
    useEffect(() => {
        document.title = "Kaiz-Event"
        list()
    }, [page])
    return (
        <div>
            <Headers/>
            <header className="text-center bg-danger"
                    style={{
                        backgroundImage: "url(https://static.tkbcdn.com/site/global/content-v2/img/home-search-bg-02.jpg)",
                        height: "150px"
                    }}>
                <div className="container pt-5">
                    <div className="input-group">
                        <input data-autocomplete="search" type="text" className="form-control"
                               placeholder="Tên sự kiện" aria-describedby="sizing-addon1"
                               tabIndex="1" autoComplete="off" onChange={(event) => setName(event.target.value)}/>
                        <span className="input-text"><button
                            onClick={() => handleSearch()}
                            className="btn btn-outline-primary"> Tìm kiếm</button></span>
                    </div>
                </div>
            </header>
            <div className="w-100 bg-white">
                <div className="container clearfix p-5" style={{boxSizing: "border-box"}}>
                    <div className="col-sm-12 input-group">
                        <div className="row">
                            <div className="col-6 pos-relative p-0 border-bottom-0">
                                <div className="w-100 input-group">
                                    <span className="input-group-text">Địa điểm</span>
                                    <input className="form-control" type="text"
                                           onChange={(e) => setLocation(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-6 pos-relative p-0 border-bottom-0">
                                <div className="w-100 input-group">
                                    <span className="input-group-text">Nghệ Sĩ</span>
                                    <input className="form-control" type="text"
                                           onChange={(e) => setArtist(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background: "whitesmoke", minHeight: "860px"}}>
                <div className="container" style={{background: "whitesmoke", minHeight: "800px"}}>
                    <div className="row">
                        {listEvent && listEvent.map(e => (
                            <div key={e.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                                <div className="card h-100">
                                    <div className="h-50">
                                        <img
                                            src={e.image}
                                            style={{objectFit:"cover",width:"100%"}}
                                            className="card-img-top" alt="Card Image"/>
                                    </div>
                                    <div className="card-body">
                                        <Link to={"/detail/" + e.id} style={{textDecoration: 'none'}}>
                                            <h5 className="card-title">{e.name}</h5>
                                        </Link>

                                        <div className="row justify-content-around d-flex mt-2">
                                            <div className="col">
                                                <p className="card-text">
                                                    <strong>Thời Gian
                                                        : </strong> <b>{(new Date(e.start).getTime())>(new Date().getTime())?(parseDate(e.start)):<b className="show-name">Đã diễn ra</b> }</b></p>

                                            </div>
                                        </div>
                                        <div className="row justify-content-around d-flex mt-2">
                                            <p className="card-text"><strong>Địa điểm :</strong> {e.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    {totalPage>1&&(
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><button className={page<1?"disabled page-link":"page-link"} onClick={()=>setPage(0)}>Đầu</button></li>
                                <li className="page-item"><button className={page<1?"disabled page-link":"page-link"} onClick={()=>setPage(page-1)}>Trước</button></li>
                                <li className="page-item"><button className="page-link active">{page+1}/{totalPage}</button></li>
                                <li className="page-item"><button className={page>=totalPage-1?"disabled page-link":"page-link"} onClick={()=>setPage(page+1)}>Sau</button></li>
                                <li className="page-item"><button className={page>=totalPage-1?"disabled page-link":"page-link"} onClick={()=>setPage(totalPage-1)}>Cuối</button></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default Home;