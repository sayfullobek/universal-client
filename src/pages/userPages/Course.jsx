import React, {useEffect, useState} from "react";
import project1 from "../../assets/usersStyle/images/project/project-image01.jpg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {embeddedGet} from "../../serverConnect/service/Service.js";
import {Apis} from "../../serverConnect/Apis.js";
import {Loader} from "../../component/Loader.jsx";
import {DeleteModal} from "../../component/DeleteModal.jsx";

export const Course = () => {
    const location = useLocation().pathname
    const [course, setCourse] = useState([])
    const [load, setLoad] = useState(false)
    const [id, setId] = useState('')
    const navigate = useNavigate()
    const [photoIds, setPhotoIds] = useState('')

    useEffect(() => {
        const getAll = async () => {
            try {
                await embeddedGet(Apis.course, setCourse, "embedded")
                setLoad(true)
            } catch {
            }
        }
        getAll()
    }, [])
    const changeIds = (item) => {
        setId(item.id)
        setPhotoIds(item.photoId)
    }
    return (
        <>{
            load ? (
                <section
                    className={location === "/auth/universal-academy/admin/course" ? "service_section pt-5" : "service_section"}
                    id={"project"}>
                    <div className="container">
                        {location === "/" ? (
                            <h2 className="mb-5 text-center text-dark" data-aos="fade-up">
                                Universal Academy
                                <strong> eng yaxshi tanlov</strong>
                            </h2>
                        ) : <div style={{marginTop: '100px'}}>
                            <Link to={"/auth/universal-academy/admin/course/upload"}
                                  style={{backgroundColor: '#0d6efd'}}
                                  className={"btn"}>save</Link>
                        </div>}

                        <div className="service_container layout_padding2 pt-1">
                            {course.map(item => (
                                <div className="service_box" style={{boxShadow: '0 0 20px .1px #97909082'}}>
                                    <div className="img-box">
                                        <img width={"90%"} height={"300px"} src={Apis.getPhoto + item.photoId} alt=""/>
                                    </div>
                                    <div className="detail-box">
                                        <h4>
                                            {item.name}
                                        </h4>
                                        <p>
                                            narxi : {item.price} so'm
                                        </p>
                                        <p>
                                            davomitligi : {item.expireMonth} oy
                                        </p>
                                        <p>
                                            {item.description}
                                        </p>
                                        {location !== "/" ? (
                                            <button type="button" onClick={() => changeIds(item)}
                                                    className="btn btn-danger m-3" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                o'chirish
                                            </button>
                                        ) : (
                                            <></>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <DeleteModal id={id} url={Apis.course} navigate={navigate} photoId={photoIds}/>
                </section>
            ) : (
                <>
                    <Loader/>
                </>
            )
        }
        </>
    )
}