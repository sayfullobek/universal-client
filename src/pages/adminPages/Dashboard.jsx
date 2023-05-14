import React from "react";
import {Link} from "react-router-dom";

export const Dashboard = () => {
    const about = [
        {
            name: 'tarmoqlar',
            link: '/auth/universal-academy/admin/aware',
            description: "tarmoqlar bo'limi"
        },{
            name: 'kurslar',
            link: '/auth/universal-academy/admin/course',
            description: "kurslar bo'limi"
        },{
            name: 'xabarlar',
            link: '/auth/universal-academy/admin/message',
            description: "xabarlar bo'limi"
        }
    ]
    return (
        <div className={"row"}>
            {about.map(item => (
                <div className="card text-bg-primary m-5" style={{maxWidth: "18rem"}}>
                    <div className="card-header">{item.name}</div>
                    <div className="card-body">
                        <h5 className="card-title text-light">
                            <Link className={"btn btn-primary"} to={item.link}>ko'rish</Link>
                        </h5>
                        <p className="card-text text-light">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}