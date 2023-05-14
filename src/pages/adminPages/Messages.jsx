import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Table} from "../../component/Table";
import {Loader} from "../../component/Loader";
import {messageHead} from "../../utils/TableHead";

export const Messages = () => {
    const [message, setMessage] = useState([])
    const [load, setLoad] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        const getAll = async () => {
            try {
                await embeddedGet(Apis.message, setMessage, "embedded")
                setLoad(true)
            } catch {
            }
        }
        getAll()
    }, [])

    return (
        <div>
            {load ? (
                <div>
                    <Table tableName="tarmoqlar" tableHead={messageHead} data={message} status={"message"} id={id}
                           setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}