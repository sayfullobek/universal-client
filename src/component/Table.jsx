import React, {useState} from "react";
import {Apis} from "../serverConnect/Apis";
import {DeleteModal} from "./DeleteModal";
import {useNavigate} from "react-router-dom"
import {MessageModal} from "../pages/adminPages/MessageModal";

export const Table = ({tableName, tableHead, data, status, id, setId, lidStatus, setLidStatus, lidButton}) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    console.log(data)
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{tableName}</h4>
                <p className="card-description">
                    {tableName} <code>.jadvali{}</code>
                </p>
                {status === "pupil" ? (
                    <div className="col mb-3">
                        {lidButton.map(btn => (
                            <button className={btn.id === lidStatus ? "btn btn-primary m-2" : "btn m-2"}
                                    onClick={() => setLidStatus(btn.id)}>
                                {btn.name}
                            </button>
                        ))}
                    </div>
                ) : ("")}
                <div className="table-responsive">
                    {data.length === 0 ? (
                        <h3 className="text-center text-danger">hozircha {tableName} mavjud emas...</h3>
                    ) : (
                        <>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    {tableHead.map(item => (
                                        item.name === "sozlamalar" ? (
                                            <th colSpan={"2"}>
                                                {item.name}
                                            </th>
                                        ) : (
                                            <th className={"col-2"}>
                                                {item.name}
                                            </th>
                                        )
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item, i) => (
                                    status === "aware" ? (
                                        <tr>
                                            <td className="col-2">{i + 1}</td>
                                            <td className={"col-4"}>{item.name}</td>
                                            <td className={"col-4"}>{item.link}</td>
                                            <td className={"col-4"}><i className={item.logo}/></td>
                                            <td>
                                                <button type="button" onClick={() => setId(item.id)}
                                                        className="btn btn-danger" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">
                                                    o'chirish
                                                </button>
                                            </td>
                                        </tr>
                                    ) : status === "message" ? (
                                        <tr>
                                            <td className="col-2">{i + 1}</td>
                                            <td className={"col-3"}>{item.name}</td>
                                            <td className={"col-3"}>+998 {item.phoneNumber}</td>
                                            <td className={"col-3"}>{item.date.substr(0, 10)}<br/>{item.date.substr(11, 5)}
                                            </td>
                                            <td className={"col-3"}>
                                                <button className={"btn btn-primary"}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModalMessage"
                                                        onClick={() => setMessage(item.message)}>xabar
                                                </button>
                                            </td>
                                        </tr>
                                    ) : (
                                        <></>
                                    )
                                ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
            <DeleteModal id={id} url={Apis.aware} navigate={navigate}/>
            <MessageModal message={message}/>
        </div>
    )
}