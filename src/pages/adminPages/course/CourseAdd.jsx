import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Apis} from "../../../serverConnect/Apis";
import {Save} from "../../../serverConnect/service/Service";
import {FormService} from "../../../component/FormService";
import {NotFound} from "../../NotFound.jsx";

export const CourseAdd = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [expireMonth, setExpireMonth] = useState('')
    const [description, setDescription] = useState('')
    const photoId = localStorage.getItem("photoId")

    const courseForm = [
        {
            name: 'kursning nomini kiriting',
            placeholder: 'kursning nomini kiriting',
            type: 'text',
            value: name,
            setValue: setName
        }, {
            name: 'kursning narxini kiriting',
            placeholder: 'kursning narxini kiriting',
            type: 'number',
            value: price,
            setValue: setPrice
        }, {
            name: 'qancha vaqt davom etadi',
            placeholder: 'qancha vaqt davom etadi',
            type: 'number',
            value: expireMonth,
            setValue: setExpireMonth
        }, {
            name: "kurs haqidagi ma'lumotni kiriting",
            placeholder: "kurs haqidagi ma'lumotni kiriting",
            type: 'textarea',
            value: description,
            setValue: setDescription,
        },
    ]
    const saveCourse = async () => {
        const check = {
            name: name.trim().length === 0,
            expireMonth: expireMonth.trim().length === 0,
            description: description.trim().length === 0,
        }
        if (check.name || check.expireMonth || check.description) {
            return toast.warning("malumot bo'sh bo'lmasin")
        }
        const data = {
            name, price, expireMonth, description, photoId
        }
        await Save(data, Apis.course, "", navigate, "course")
    }

    return (
        <div>
            {photoId === "" ? (
                <NotFound/>
            ) : (
                <FormService formName={"kurs saqlash"} formArr={courseForm} method={saveCourse} url={"course"}/>
            )}
        </div>
    )
}