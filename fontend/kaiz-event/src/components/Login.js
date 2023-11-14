import './util.css'
import './main.css'
import {Field, Formik, Form} from "formik";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/jwt";
import {toast} from "react-toastify";


function Login() {
    const navigate = useNavigate();
    const createRequest = async (value) => {
       try {
           const jwt = await login(value)
           console.log(jwt)
           localStorage.setItem("JWT", jwt.data.token);
           navigate("/")
           toast("Đăng nhập thành công")
       }catch (e){
           toast("Sai tên đăng nhập hoặc mật khẩu")
       }
    }
useEffect(()=>{
    document.title="Kaiz-Event"
})

    return (
       <Formik initialValues={{
           username:"",
           password:""
       }} onSubmit={(values)=>
           createRequest(values)}
       >
           <div className="limiter">
               <div className="container-login100">
                   <div className="wrap-login100">
                       <div className="login100-pic js-tilt">
                           <img alt="IMG"/>
                       </div>

                       <Form className="login100-form validate-form" name='f'
                             method='post'>
					<span className="login100-form-title">
						Đăng nhập
					</span>

                           <div className="wrap-input100 validate-input" data-validate="Email theo định dạng: ex@abc.xyz">
                               <Field className="input100" type="text" name="username" placeholder="Email"/>
                               <span className="focus-input100"></span>
                               <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                           </div>

                           <div className="wrap-input100 validate-input" data-validate="Mật khẩu không để trống!">
                               <Field className="input100" type="password" name="password" placeholder="Mật khẩu"/>
                               <span className="focus-input100"></span>
                               <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                           </div>

                           <div className="container-login100-form-btn">
                               <button className="login100-form-btn" name="submit" type="submit" value="submit">
                                   Đăng nhập
                               </button>
                           </div>

                           <div className="text-center p-t-12">
						<span className="txt1">
							Quên
						</span>
                               <a className="txt2">
                                   mật khẩu?
                               </a>
                           </div>

                           <div className="text-center ">
                               <a className="txt2">
                                   Bạn chưa có tài khoản?Đăng ký ngay
                                   <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                               </a>
                           </div>
                       </Form>
                   </div>
               </div>
           </div>
       </Formik>
    )
}

export default Login;