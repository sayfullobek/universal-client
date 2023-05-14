import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../handlers/auth";
import {LoginHandler} from "../../serverConnect/service/AuthService";

export const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginAbout = [
        {placeholder: 'username ni kiriting', val: username, setVal: setUsername, type: "text"},
        {placeholder: 'parolingizni kiriting', val: password, setVal: setPassword, type: "password"}
    ]
    useEffect(() => {
        const redirectAdminPanel = () => {
            const token = localStorage.getItem('token');
            const isAuth = isAuthenticated(token)
            if (isAuth) return navigate('/auth/universal-academy/admin')
        }
        redirectAdminPanel()
    }, [])
    const loginHandler = async (e) => {
        e.preventDefault();
        const data = {
            username,
            password
        }
        await LoginHandler(data)
    }
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo d-flex align-tems-center justify-content-center">
                                    {/*<img src={logo} alt="logo" className="w-50"/>*/}
                                    <h2 className={"text-primary"}>Universal Academy</h2>
                                </div>
                                <h4 className={"text-primary"}>salom! hush kelibsiz malumotlarni to'ldiring</h4>
                                <h6 className="font-weight-light"><span className="text-primary">U</span>NIVERSAL <span
                                    className="text-primary">Academy</span></h6>
                                <form className="pt-3">
                                    {loginAbout.map(item => (
                                        <div className="form-group">
                                            <input type={item.type} className="form-control form-control-lg"
                                                   value={item.val} onChange={e => item.setVal(e.target.value)}
                                                   id={`exampleInput${item.placeholder}`}
                                                   placeholder={item.placeholder}/>
                                        </div>
                                    ))}
                                    <h6 className="text-danger text-center">{localStorage.getItem('msg')}</h6>
                                    <div className="mt-3">
                                        <button onClick={loginHandler}
                                                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">KIRISH
                                        </button>
                                    </div>
                                </form>
                                <a href="/" className={"text-center"}>asosiy menyuga qaytish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}