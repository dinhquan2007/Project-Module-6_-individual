import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {infoUser} from "../service/account";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

function Paypal(props) {
    const paypal = useRef();
    const [cart, setCart] = useState({
        cartDtos: []
    });
    const navigate = useNavigate();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, action, err) => {
                    const price = parseFloat(props.total);
                    const usd = parseInt(price / 23000);
                    return action.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Kaiz-Event",
                                amount: {
                                    currency_code: "USD",
                                    value: usd
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    const res = infoUser();
                    if (res != null) {
                        setCart({cartDtos: props.data});
                        console.log(cart)

                        await axios.post(`http://localhost:8080/api/regis/create?username=${res.sub}`, {cartDtos: props.data})
                    }
                    setCart({cartDtos: []});
                    toast("Thanh toán thành công");
                    navigate(`/detail/${props.orders}`)
                },
                onError: (err) => {
                    toast("Thanh toán thất bại")
                    console.log(err);
                }
            }).render(paypal.current);
    }, [])
    return (<>
            <div ref={paypal}>
            </div>
        </>
    )
}

export default Paypal;