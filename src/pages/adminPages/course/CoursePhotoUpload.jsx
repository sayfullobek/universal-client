import React, {useState} from "react";
import './upload.css'
import {Link, useNavigate} from "react-router-dom";
import {deleteService, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";

export const CoursePhotoUpload = () => {
    const photoId = localStorage.getItem('photoId')

    const navigate = useNavigate()

    const sendPhoto = async (e) => {
        let formData = new FormData();
        formData.append("photo", e.target.files[0])
        await SendPhoto(formData)
    }
    const deletePhoto = async () => {
        if (photoId === "") {
            navigate("/auth/universal-academy/admin/course")
        } else {
            await deleteService(photoId, Apis.deletePhoto, navigate, "/auth/universal-academy/admin/course")
        }
    }
    return (
        <div className="Neon Neon-theme-dragdropbox">
            {photoId === "" ? (
                <input
                    style={{
                        zIndex: "999",
                        opacity: "0",
                        width: "320px",
                        height: "200px",
                        position: "absolute",
                        right: "0px",
                        left: "0px",
                        marginRight: "auto",
                        marginLeft: "auto"
                    }}
                    multiple accept="image/*"
                    onChange={(item) => sendPhoto(item)}
                    name="files[]" id="filer_input2" type="file"/>
            ) : (
                <></>
            )}
            <div className="Neon-input-dragDrop">
                {photoId === "" ? (
                    <div className="Neon-input-inner">
                        <div className="Neon-input-icon"><i className="fa fa-file-image-o"/></div>
                        <div className="Neon-input-text"><h3>Drag&amp;Drop files here</h3> <span
                            style={{display: "inline-block", margin: "15px 0"}}>or</span></div>
                        <a className="Neon-input-choose-btn blue">Browse Files</a></div>
                ) : (
                    <div className="Neon-input-inner">
                        <img width={"100%"}
                             src={Apis.getPhoto + photoId}
                             alt="1"/>
                    </div>
                )}
                <button className={"btn btn-danger m-3"} onClick={() => deletePhoto()}>orqaga</button>
                <Link className={photoId === "" ? "btn btn-primary m-3 disabled" : "btn btn-primary m-3"}
                      to={"/auth/universal-academy/admin/course/add"}>oldinga</Link>
            </div>
        </div>
    )
}