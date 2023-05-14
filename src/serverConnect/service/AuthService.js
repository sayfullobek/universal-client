import {toast} from "react-toastify"
import {isSuccess, stringDataIf} from "../../handlers/auth"
import {ApiController} from "../ApiController"
import {Apis} from "../Apis"

export const LoginHandler = async (data) => {
    if (stringDataIf(data.username)) {
        window.location.reload()
        return localStorage.setItem('msg', "username bo'sh bo'lishi mumkin emas")
    }
    if (stringDataIf(data.password)) {
        window.location.reload()
        return localStorage.setItem('msg', "parol bo'sh bo'lishi mumkin emas")
    }
    try {
        const res = await ApiController.doPost(Apis.login, data)
        if (isSuccess(res.status)) {
            localStorage.setItem('id', res.data.user.id)
            localStorage.setItem('token', res.data.resToken.body)
            localStorage.setItem('tokenType', res.data.resToken.tokenType)
            localStorage.setItem('firstName', res.data.user.firstName)
            localStorage.setItem('lastName', res.data.user.lastName)
            localStorage.setItem('username', res.data.user.username)
            localStorage.setItem('role', res.data.user.role.roleName)
            localStorage.setItem('realPassword', res.data.user.password)
            localStorage.setItem('msg', "")
            localStorage.setItem('see', "0")
            localStorage.setItem('photoId', "")
            toast.success('hush kelibsiz')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
    } catch (err) {
        localStorage.setItem('msg', err.message)
        window.location.reload()
    }
}