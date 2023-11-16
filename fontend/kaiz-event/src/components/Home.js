import 'bootstrap/dist/css/bootstrap.min.css'
import Headers from "./Header";
import {useEffect, useState} from "react";
import {getList} from "../service/event";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {parseDate} from "../service/parseDate";
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
    const handleSearch = () => {
      list()
    }
    useEffect(()=>{
        document.title="Kaiz-Event"
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
                              tabIndex="1" autoComplete="off" onChange={(event)=>setName(event.target.value)}/>
                       <span className="input-text"><button
                           onClick={()=>handleSearch()}
                           className="btn btn-outline-primary"> Tìm kiếm</button></span>
                   </div>
               </div>
           </header>
           <div className="w-100 bg-white" >
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
           <div style={{background:"whitesmoke",minHeight:"700px"}}>
               <div className="container">
                   <div className="row">
                       {listEvent&&listEvent.map(e=>(
                           <div key={e.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-2 my-2">
                               <div className="card h-100">
                                   <div className="h-50">
                                       <img
                                           src={e.image}
                                           className="card-img-top" alt="Card Image"/>
                                   </div>
                                   <div className="card-body">
                                       <Link to={"/detail/"+e.id} style={{ textDecoration: 'none' }}>
                                           <h5 className="card-title" >{e.name}</h5>
                                       </Link>

                                       <div className="row justify-content-around d-flex mt-2">
                                           <div className="col">
                                               <p className="card-text"><strong>Thời Gian : </strong> {parseDate(e.start)}</p>
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
           </div>
           <Footer/>
       </div>
)
}
export default Home;