import Footer from "./Footer";
import Headers from "./Header";
import {useNavigate, useParams} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import {useEffect, useState} from "react";
import {getAllTypeTicketInEvent} from "../service/ticket";
import {getEventDetail} from "../service/event";
import {parseDate, parseDay, vnd} from "../service/parseDate";
import Paypal from "./Payment";
import {ToastContainer} from "react-toastify";

function Order() {
    const [checkout,setCheckout]=useState(false)
    const param = useParams()
    const [event, setEvent] = useState({});
    const [listTicket, setListTicket] = useState([]);
    const [ cart, setCart] = useState([]);
    const [sum,setSum]=useState(0);
    const [locations, setLocations] = useState({
        id: null,
        name: "",
        address: "",
        rentCost: 0
    });
    const increaseTicket = (ticket) => {
        const arr = [...cart];
        if (cart.some((t) => {
            return t.id === ticket.id
        })) {
            arr.forEach((t) => {
                if (t.id === ticket.id) {
                    t.quantity += 1;
                }
            })
        } else {
            const newTicket = {...ticket, quantity: 1};
            arr.push(newTicket)
        }
        setCart(arr);
        // console.log(arr)
        setSum(sum+ticket.price)

    }
    const checkQuantity = (ticket) => {
        const arr = [...cart];
        const index = arr.findIndex((t) => t.id === ticket.id);
        if (index !== -1){
            return arr[index].quantity
        }else{
            return 0
        }
    }
    const decreaseTicket = (ticketId) => {
        const arr = [...cart];
        const index = arr.findIndex((t) => t.id === ticketId);
        if (index !== -1) {
            setSum(sum- arr[index].price)
            // Tìm thấy mặt hàng trong giỏ hàng
            if (arr[index].quantity > 1) {
                // Nếu số lượng lớn hơn 1, giảm số lượng đi 1
                arr[index].quantity -= 1;

            } else {
                // Nếu số lượng bằng 1, xóa mặt hàng khỏi giỏ hàng
                arr.splice(index, 1);
            }

        }
        // Trả về giỏ hàng đã được cập nhật
        setCart(arr);
    };
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
    }, [param,cart.length,checkout]);

    return (
        <div>
            <Headers/>
            <header className="text-center bg-danger"
                    style={{
                        backgroundImage: "url(https://static.tkbcdn.com/site/global/content-v2/img/home-search-bg-02.jpg)",
                        height: "150px"
                    }}>
                <div className="container pt-3">
                    <div className="event-name text-center">
                        <div className="col-sm-7 col-md-8">

                            <div className="cnt-left col-xs-12 col-sm-12 padding-left-0 padding-right-0">
                                <h3 className="text-light">{event.name}</h3>
                                <p className="text-light">
                                    {parseDate(event.dateStart)}
                                </p>
                                <p className="text-light">
                                    {locations.name}
                                </p>
                                <p className="text-light">{locations.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="w-100" style={{background: "whitesmoke", minHeight: "500px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-xs-12 my-5 pt-3 bg-white" style={{border: "1px solid lightgrey"}}>
                            <table className="table table-striped w-100">
                                <thead className="p-2">
                                <tr className="p-2">
                                    <th className="p-2 text-center" style={{width: "33%"}}>Loại vé</th>
                                    <th className="p-2 text-center" style={{width: "33%"}}>Giá vé</th>
                                    <th className="p-2 text-center" style={{width: "33%"}}>Số lượng</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listTicket && listTicket.map(t => (
                                    <tr key={t.id}>
                                        <td className="text-center">{t.name}</td>
                                        <td className="text-center">{vnd.format(t.price)}</td>
                                        <td className="d-flex justify-content-center">
                                            <div className="btn-group d-flex justify-content-center">
                                                <div className="input-group w-50 text-center">
                                                    <button className="btn btn-outline-secondary" type="button"
                                                    onClick={()=>{
                                                        decreaseTicket(t.id)
                                                    }}>
                                                        -
                                                    </button>
                                                    <input type="text" min="0"
                                                           className="form-control text-center w-50" value={checkQuantity(t)}/>
                                                    <button className="btn btn-outline-secondary" onClick={() => {
                                                        increaseTicket(t);
                                                    }} type="button">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-4 col-xs-12 mt-5">
                            <div className="w-100">
                                <div className="w-100 pos-relative">
                                    <div className="details bg-white p-2 w-100">
                                        <h5 className="py-1">
                                            THÔNG TIN ĐẶT VÉ
                                        </h5>
                                        <hr/>
                                        <div className="row my-2 p-1">
                                            <b className="col ml-0 ">Loại vé</b>
                                            <b className="col-auto mr-0 ">Số lượng</b>
                                        </div>
                                        <hr/>
                                        {cart.length >0 ? cart.map((t) => (
                                            <>
                                                <div className="row my-0 p-1">
                                                    <div className="col ml-0 ">{t.name}</div>
                                                    <div className="col-auto mr-0 ">{t.quantity} vé</div>
                                                </div>
                                                <div className="row my-0 p-1">
                                                    <div className="col ml-0 ">{vnd.format(t.price)}</div>
                                                    <div
                                                        className="col-auto mr-0 ">{vnd.format(t.quantity * t.price)}</div>
                                                </div>
                                                <hr/>
                                            </>
                                        )):(<div className="row my-2 p-1">
                                            <p>Vui lòng chọn vé</p>
                                            <hr/>
                                        </div>)}
                                        <div style={{
                                            backgroundColor: "#666",
                                            borderTop: "0", padding: "10px"
                                        }}>
                                            <div className="row">
                                                <strong className="col ml-0 text-light">Tổng cộng</strong>
                                                <strong className="col-auto mr-0 text-light">{vnd.format(sum)}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {checkout?(<Paypal total ={sum} data={cart} />):(
                                            cart.length>0&&(
                                                    <button type="button" onClick={()=>setCheckout(true)} className="btn btn-block btn-outline-success w-100 mt-3 p-2 ">
                                                        Tiến hành thanh toán
                                                    </button>
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
            <Footer/>
        </div>
    )
}

export default Order;