import './detail.css'
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import {useEffect, useState} from "react";
import {getEventDetail} from "../../service/event";
import {toast} from "react-toastify";
import {parseDate, parseDay, vnd} from "../../service/parseDate";
import {getAllTypeTicketInEvent} from "../../service/ticket";
import Footer from "../Footer";
import Headers from "../Header";
import {infoUser} from "../../service/account";

function Detail() {
    const param = useParams()
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    const [listTicket, setListTicket] = useState([]);
    const [locations, setLocations] = useState({
        id: null,
        name: "",
        address: "",
        rentCost: 0
    });
    const checkLogin = () => {
        const res = infoUser()
        if (res != null) {
            navigate(`/order/${param.id}`)
        } else {
            toast("Vui lòng đăng nhập")
            navigate("/login")
        }
    }
    const getListTicket = async (id) => {
        const res = await getAllTypeTicketInEvent(id);
        setListTicket(res);
    }
    const getEvent = async (id) => {
        const res = await getEventDetail(id);
        setEvent(res.data)
        setLocations(res.data.location)
    };
    useEffect(() => {
        getEvent(param.id)
        getListTicket(param.id)
    }, [param]);

    return (
        event&&
            <>
                <Headers/>
                <section className="banner bg-white margin-bottom-20 border-bottom-grey-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 p-0">
                                <img style={{width: "100%", height: "auto"}}
                                     src={event.image}></img>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="event-info">
                                <div className="event-name text-center">
                                    <div className="col-sm-7 col-md-8">
                                        <div
                                            className="calendar-image padding-left-0 padding-right-0 text-bold">
                                            <p className="month">Tháng {new Date(event.dateStart).getMonth() + 1} </p>
                                            <p className="date">{new Date(event.dateStart).getDate()}</p>
                                            <p className="day">{parseDay(new Date(event.dateStart).getDay())}</p>
                                        </div>

                                        <div className="event-name-content padding-left-0 padding-right-0">
                                            <div className="col-sm-12 mt-3">
                                                <h1 className="title grey-dark-color mt-2">{event.name}</h1>
                                            </div>

                                            <div className="button-gr btn-count col-xs-12 col-sm-12 visible-xs"
                                                 style={{marginTop: "0px", color: "#606778"}}>
                                            </div>
                                            <div
                                                className="cnt-left col-xs-12 col-sm-12 padding-left-0 padding-right-0">
                                                <div className="event-time col-sm-12 pd-hor-15">
                                                    <div className="inline-bl">
                                                        <p className="grey-dark-color text-bold text-indent txt-16">
                                                            {parseDate(event.dateStart)}
                                                        </p>

                                                    </div>

                                                    <div className="clear"></div>
                                                </div>
                                                <div className="event-venue border-top-grey col-sm-12 pd-hor-15">

                                                    <p className="grey-dark-color text-bold text-indent txt-16">
                                                        {locations.name}
                                                    </p>
                                                    <p className="grey-white-color note">{locations.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-100" style={{background: "whitesmoke"}}>
                    <div className="container">
                        <div className="row">
                            <div className="row col-sm-12 col-md-12 pr-0 pl-0 mb-5">
                                <div className="col-md-8 p-3 bg-white mt-2 ">
                                    <h3 className="card-title">Giới thiệu</h3>
                                    <hr/>
                                    <div className="col-xs-12" style={{position: "relative", width: "100%"}}>
                                        <div style={{width: "100%", padding: "0"}}
                                             dangerouslySetInnerHTML={{__html: event.description}}>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{position: "initial"}}>
                                    <div className="mt-2 bg-white p-3">
                                        <h3 className="card-title">
                                            Thông tin vé
                                        </h3>
                                        <hr/>
                                        {listTicket && listTicket.map(t => (
                                                <>
                                                    <div className="row justify-content-around d-flex p-2"
                                                         style={{borderBottom: "1px solid #f5f5f5", padding: "5px"}}>
                                                        <div className="col-sm-7 ">
                                                            {t.name}
                                                        </div>
                                                        <div className="col-sm-5 ">
                                                            <strong
                                                                style={{float: "right"}}>{vnd.format(t.price)}</strong><br/>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        )}
                                        {
                                            (new Date(event.dateStart).getTime()) < (new Date().getTime()) ? (
                                                <button className="btn btn-secondary btn-block w-100 disabled">
                                                    Sự kiện đã diễn ra
                                                </button>
                                            ) : (<button className="btn btn-block btn-danger w-100"
                                                         onClick={() => checkLogin()}>
                                                Mua vé ngay
                                            </button>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
    )
}

export default Detail;