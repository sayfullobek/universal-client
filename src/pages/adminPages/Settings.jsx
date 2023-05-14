import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {FormService} from "../../component/FormService.jsx";
import {Save} from "../../serverConnect/service/Service.js";
import {Apis} from "../../serverConnect/Apis.js";

export const Settings = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const id = localStorage.getItem("id")
    const changejon = [
        {
            name: "usernameni o'zgartiring",
            placeholder: 'usernameni o\'zgartiring',
            type: 'text',
            value: username,
            setValue: setUsername
        }, {
            name: "parolni o'zgaritish",
            placeholder: "parolni o'zgaritish",
            type: 'password',
            value: password,
            setValue: setPassword
        }, {
            name: "tasdiqlash parolini kiriting",
            placeholder: "tasdiqlash parolini kiriting",
            type: 'password',
            value: prePassword,
            setValue: setPrePassword
        }
    ]
    const settingSave = async () => {
        const check = {
            username: username.trim().length === 0,
            password: password.trim().length === 0,
        }
        if (check.username || check.password) {
            return toast.warning("malumot bo'sh bo'lmasin")
        }
        if (password !== prePassword) {
            return toast.error("parol va tasdiqlash paroli teng bo'lishi shart")
        }
        const data = {
            username, password
        }
        await Save(data, Apis.admin, id, navigate, "/")
    }

    return (
        <div>
            <FormService formName={"ma'lumotlarni almashtirish"} formArr={changejon} method={settingSave}
                         url={"/"}/>
        </div>
    )
}