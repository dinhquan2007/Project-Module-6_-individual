import 'bootstrap/dist/css/bootstrap.min.css'
import Headers from "./Header";
import {useEffect, useState} from "react";
import {getList} from "../service/event";
function Home() {
    const [listEvent,setListEvent]=useState([]);
    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [artist,setArtist]=useState("");
    const [page,setPage]=useState(0);
    const list = async () => {
        const res= await getList(name,location,artist,page)
        setListEvent(res.content)
    }
    useEffect(()=>{
    list()
    },[])
   return(
       <div>
           <Headers/>
           <header className="text-center bg-danger"
                   style={{backgroundImage: "url(https://static.tkbcdn.com/site/global/content-v2/img/home-search-bg-02.jpg)",height: "150px"}}>
               <div className="container pt-5">
                   <div className="input-group">
                       <input data-autocomplete="search" type="text" className="form-control"
                              placeholder="Tên sự kiện" aria-describedby="sizing-addon1"
                              value=""
                              tabIndex="1" autoComplete="off"/>
                       <span className="input-text"><button
                           className="btn btn-outline-primary"> Tìm kiếm</button></span>
                   </div>
               </div>
           </header>
           <div className="w-100 bg-white">
               <div className="container clearfix p-5" style={{boxSizing: "border-box"}}>
                   <div className="col-sm-12 input-group">
                       <div className="row">
                           <div className="col-6 pos-relative p-0 border-bottom-0">
                               <div className="w-100">
                                   <select className="form-select form-select-lg" data-location="true" tabIndex="94">
                                       <option value="">Địa Điểm</option>
                                       <option value="ho-chi-minh">Ho Chi Minh</option>
                                       <option value="ha-noi">Ha Noi</option>
                                       <option value="other-locations">Other locations</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-6 pos-relative p-0 border-bottom-0">
                               <div className="w-100">
                                   <select className="form-select form-select-lg" data-location="true" tabIndex="94">
                                       <option value="">Ca sĩ</option>
                                       <option value="ho-chi-minh">Ho Chi Minh</option>
                                       <option value="ha-noi">Ha Noi</option>
                                       <option value="other-locations">Other locations</option>
                                   </select>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div style={{background:"whitesmoke" }}>
               <div className="container">
                   <div className="row">
                       {listEvent&&listEvent.map(e=>(
                           <div key={e.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                               <Link to={`api/event/detail/${e.id}`}>
                               <div className="card h-100">
                                   <div className="h-50">
                                       <img
                                           src={e.image}
                                           className="card-img-top" alt="Card Image"/>
                                   </div>
                                   <div className="card-body">
                                       <h5 className="card-title">{e.name}</h5>
                                       <div className="row justify-content-around d-flex mt-2">
                                           <div className="col">
                                               <p className="card-text">{e.price}</p>
                                           </div>
                                           <div className="col-auto">
                                               <p className="card-text">{e.dateStart}</p>
                                           </div>
                                       </div>
                                       <div className="row justify-content-around d-flex mt-2">
                                               <p className="card-text">{e.location}</p>
                                       </div>
                                   </div>
                               </div>
                               </Link>
                           </div>
                       ))}

                       <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                           <div className="card h-100">
                               <div className="h-50">
                                   <img
                                       src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/10/24/D1666B.jpg"
                                       className="card-img-top" alt="Card Image"/>
                               </div>
                               <div className="card-body">
                                   <h5 className="card-title">GENfest - CỔNG ÂM NHẠC ĐA GIÁC QUAN</h5>

                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">800.000đ</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">05/11/2023</p>
                                       </div>
                                   </div>
                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">Live music</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">Hồ Chí Minh</p>
                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                       <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                           <div className="card h-100">
                               <div className="h-50">
                                   <img src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/09/11/A79B0F"
                                        className="card-img-top" alt="Card Image"/>
                               </div>
                               <div className="card-body">
                                   <h5 className="card-title">[HN] 1589 - TRUNG QUÂN- 15 YEARS LIVE CONCERT</h5>

                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">700.000đ</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">03/11/2023</p>
                                       </div>
                                   </div>
                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">Live music</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">Hồ Chí Minh</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                           <div className="card h-100">
                               <div className="h-50">
                                   <img
                                       src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/09/26/45D998.jpg"
                                       className="card-img-top" alt="Card Image"/>
                               </div>
                               <div className="card-body">
                                   <h5 className="card-title">SONG MUSIC FESTIVAL</h5>

                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">800.000đ</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">05/11/2023</p>
                                       </div>
                                   </div>
                                   <div className="row justify-content-around d-flex my-2">
                                       <div className="col">
                                           <p className="card-text">Live music</p>
                                       </div>
                                       <div className="col-auto">
                                           <p className="card-text">Hồ Chí Minh</p>
                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
)
}
export default Home;