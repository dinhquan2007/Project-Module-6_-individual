import '../../public/main.css'
import '../../public/util.css'
import {useState} from "react";


function Login(){
    const [user,setUser]=useState({

    })
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img  alt="IMG"/>
                    </div>

                    <form className="login100-form validate-form" name='f'
                          method='post'>
					<span className="login100-form-title">
						Đăng nhập
					</span>

                        <div className="wrap-input100 validate-input" data-validate="Email theo định dạng: ex@abc.xyz">
                            <input className="input100" type="text" name="username" placeholder="Email"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Mật khẩu không để trống!">
                            <input className="input100" type="password" name="password" placeholder="Mật khẩu"/>
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
                            <a className="txt2" >
                                Bạn chưa có tài khoản?Đăng ký ngay
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;