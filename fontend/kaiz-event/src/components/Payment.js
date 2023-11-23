import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {infoUser} from "../service/account";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
function Paypal(props) {
    const paypal = useRef();
    const [cart, setCart] = useState({
        cartDtos : []
    });
    const navigate = useNavigate();
    useEffect(() =>
        {
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

                    const res=infoUser();
                    if (res!=null){
                        setCart({cartDtos : props.data});
                        console.log(cart)

                        await axios.post(`http://localhost:8080/api/regis/create?username=${res.sub}`,{cartDtos : props.data})
                    }

                    setCart({cartDtos : []})
                    toast("Thanh toán thành công")
                    console.log(order)
                },
                onError: (err) => {
                    toast("Thanh toán thất bại")
                    console.log(err);
                }
            }).render(paypal.current);
        },[]
    )
    return (<>
            <div ref={paypal}>
            </div>
    </>


    )
}
export default Paypal;

//
// import React, { useRef, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import swal from "sweetalert2";
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// // import { addToOrders, infoAppUserByJwtToken } from "../service/Account";
// import axios from "axios";
//
// export default function Paypal(props) {
//     const paypal = useRef();
//     const [carts, setCarts] = useState({});
//     const navigate = useNavigate();
//
//     return (
//         <div>
//             <PayPalButtons
//                 createOrder={(data, actions, err) => {
//                     const price = parseFloat(props.total);
//                     const priceUsd = parseInt(price / 23000);
//                     return actions.order.create({
//
//                         intent: "CAPTURE",
//                         purchase_units: [
//                             {
//                                 description: "Cool looking table",
//                                 amount: {
//                                     currency_code: "USD",
//                                     value: priceUsd,
//                                 },
//                             },
//                         ],
//                     });
//
//                 }}
//                 onApprove={async (data, actions) => {
//                     const order = await actions.order.capture();
//                     // setCarts({
//                     //     cartDetailDtoList: props.propData2
//                     // });
//                     // const res = infoAppUserByJwtToken();
//                     // console.log(carts);
//                     // if (res != null) {
//                     //     await addToOrders({
//                     //         cartDetailDtoList: props.propData2
//                     //     }, res.sub);
//                     //
//                     //     console.log(props.propData2);
//                     // }
//                     // swal.fire("Mua hàng thành công !");
//                     alert("oke")
//                     window.location.reload()
//                 }
//                 }
//                 onError={(err) => {
//                     console.log(err);
//                     swal.fire("Thanh toán không thành công!", "", "error");
//                 }}
//             />
//         </div>
//     );
// }
