import Headers from "./Header";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {getListOrder} from "../service/order";
import {parseDate, vnd} from "../service/parseDate";
import Ticket from "./Ticket";
import {infoUser} from "../service/account";

function History() {
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState(0);
    const getUsername = () => {
        const res = infoUser();
        if (res != null) {
            listOrder(res.sub)
        }
    }
    const listOrder = async (username) => {
        try{
            const res = await getListOrder(username)
            console.log(res)
            setOrders(res)
        }catch (e) {
            console.log(e)
        }
    };
    useEffect(() => {
        getUsername();
    }, [id]);
    return (
        <div>
            <Headers/>
            <div className="w-100" style={{background: "whitesmoke", minHeight: "500px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12 mt-5">
                            <div className="w-100">
                                <div className="w-100 pos-relative" style={{border: "2px solid lightgrey"}}>
                                    <div className="details bg-white p-2 w-100">
                                        <h5 className="py-1 text-center">
                                            LỊCH SỬ ĐẶT VÉ
                                        </h5>
                                        <hr/>
                                        {orders && orders.map(o => (
                                            <div className="m-2 p-2" style={{border: "2px outset lightgrey"}}>
                                                <div className="row my-2 p-1">
                                                    <button type="button" onClick={() => setId(o.registration)}>
                                                        <div className="show-name">{o.event}</div>
                                                    </button>
                                                </div>
                                                <div className="row my-0 p-1">
                                                    <div className="col ml-0 ">Số lượng</div>
                                                    <div className="col-auto mr-0 ">{o.quantity} vé</div>
                                                </div>
                                                <div className="row my-0 p-1">
                                                    <div className="col ml-0 ">Ngày mua</div>
                                                    <div className="col-auto mr-0 ">{parseDate(new Date(o.time))}</div>

                                                </div>
                                                <div className="row my-0 p-1">
                                                    <div className="col ml-0 ">Tổng tiền</div>
                                                    <div
                                                        className="col-auto mr-0 ">{vnd.format(o.total)}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-xs-12 my-5 pt-3 bg-white" style={{border: "2px solid lightgrey"}}>
                            <h5 className="text-center">
                                CHI TIẾT
                            </h5>
                            <hr/>
                            {id !==0? (<Ticket data={id}/>) : (
                                <p style={{color:"green",textAlign:"center"}}>Note:Vui lòng chọn phiếu đăng ký để xem chi tiết</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default History;