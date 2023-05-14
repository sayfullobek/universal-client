import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Table} from "../../../component/Table";
import {Loader} from "../../../component/Loader";
import {awareHead} from "../../../utils/TableHead";

export const Aware = () => {
    const [aware, setAware] = useState([])
    const [load, setLoad] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        const getAll = async () => {
            try {
                await embeddedGet(Apis.aware, setAware, "embedded")
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
                    <Link to={"/auth/universal-academy/admin/aware/add"}
                          className="btn btn-primary mb-3">+qo'shish</Link>
                    <Table tableName="tarmoqlar" tableHead={awareHead} data={aware} status={"aware"} id={id}
                           setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}