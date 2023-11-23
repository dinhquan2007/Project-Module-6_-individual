import {getListTicket} from "../service/order";
import {useEffect, useState} from "react";
import "./ticket.css";
import {parseDay, vnd} from "../service/parseDate";

function Ticket({data}) {
    const [orderDetail, setOrderDetail] = useState([]);
    const getListTickets = async () => {
        const res = await getListTicket(data);
        setOrderDetail(res);
    }
    useEffect(() => {
        getListTickets()
    },[data])
    return (
        <>
            {orderDetail&&orderDetail.map((t,s)=>(
                <div id="quan" className="mt-3">
                    <div className="ticket">
                        <div className="left w-75">
                            <div className="image w-50">
                                <img src={t.image} style={{width:"100%",height:"100%"}}/>
                            </div>
                            <div className="ticket-info w-50">
                                <p className="date">
                                    <span>{parseDay(new Date(t.start).getDay())}</span>
                                    <span className="june-29">{new Date(t.start).getDate()}/{new Date(t.start).getMonth()}</span>
                                    <span>{new Date(t.start).getFullYear()}</span>
                                </p>
                                <div className="show-name">
                                    {t.event}
                                </div>
                                <div className="time">
                                    <p>{new Date(t.start).getHours()}:{new Date(t.start).getMinutes().toString().padStart(2,'0')} <span>to</span>{new Date(t.end).getHours()}:{new Date(t.end).getMinutes().toString().padStart(2,'0')} </p>
                                </div>
                                <p className="location">
                                   <span>{t.address}</span>
                                </p>
                            </div>
                        </div>
                        <div className="right w-25">
                            <p className="admit-one">
                                <span style={{color:"red"}}>{vnd.format(t.price)}</span>
                                <span style={{color:"red"}}>{t.area}</span>

                            </p>
                            <div className="right-info-container">
                                <div className="show-name">
                                    <h1>{t.location}</h1>
                                </div>
                                <div className="time">
                                    <p>{new Date(t.start).getHours()}:{new Date(t.start).getMinutes().toString().padStart(2,'0')} <span>to</span>{new Date(t.end).getHours()}:{new Date(t.end).getMinutes().toString().padStart(2,'0')} </p>

                                </div>
                                <div className="barcode">

                                </div>
                                <p className="ticket-number">
                                    #{new Date(t.start).getTime()+s}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                )
            )}
        </>
    )
}

export default Ticket;