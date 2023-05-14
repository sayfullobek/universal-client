import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Apis} from "../../../serverConnect/Apis";
import {Save} from "../../../serverConnect/service/Service";
import {FormService} from "../../../component/FormService";

export const AwareAdd = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [logo, setLogo] = useState('')
    const [awareAbout, setAwareAboutId] = useState('')
    const about = [
        {name: 'link', id: "LINK"},
        {name: "ma'lumot", id: "MALUMOT"},
        {name: 'address', id: "ADDRESS"},
        {name: 'ijtimoiy tarmoq', id: "TARMOQ"},
        {name: 'telefon raqam', id: "PHONE_NUMBER"},
    ]
    const awareForm = [
        {
            name: 'tarmoq nomi',
            placeholder: 'ijtimoiy tarmoq nomini kiriting',
            type: 'text',
            value: name,
            setValue: setName
        }, {
            name: 'https://...',
            placeholder: 'ijtimoiy tarmoq linkini kiriting',
            type: 'text',
            value: link,
            setValue: setLink
        }, {
            name: 'logo',
            placeholder: 'ijtimoiy tarmoq logosini kiriting',
            type: 'text',
            value: logo,
            setValue: setLogo
        }, {
            name: "ijtimoiy tarmoqning turini tanlang",
            placeholder: "ijtimoiy tarmoq turini tanlang",
            type: 'select',
            value: awareAbout,
            setValue: setAwareAboutId,
            arr: about
        },
    ]
    const saveAware = async () => {
        const check = {
            name: name.trim().length === 0,
            logo: logo.trim().length === 0,
            awareAboutId: awareAbout === '0',
        }
        if (check.name || check.logo || check.awareAboutId) {
            return toast.warning("malumot bo'sh bo'lmasin")
        }
        let about = awareAbout
        const data = {
            name, link, logo, about
        }
        await Save(data, Apis.aware, "", navigate, "aware")
    }

    return (
        <div>
            <FormService formName={"tarmoq saqlash"} formArr={awareForm} method={saveAware} url={"aware"}/>
        </div>
    )
}