import React from "react";
import {Apis} from "../serverConnect/Apis";

export const Cards = ({arr}) => {
    return (
        <div className="col-md-12 grid-margin transparent">
            <div className="row">
                {arr.map(item => (
                    <div className="mt-4 col-md-3 mb-lg-0 stretch-card transparent"
                    >
                        <div className="card" style={{
                            backgroundImage: `url(${Apis.getPhoto + item.photoId})`,
                            baclgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="card-body text-light"
                                 style={{fontWeight: 'bold'}}>
                                <p className="mb-4" style={{textShadow: '0px 2px 1px black'}}>{item.name}</p>
                                <p className="fs-30 mb-2"
                                   style={{textShadow: '0px 5px 2px black'}}>{item.price} so'm</p>
                                <p style={{textShadow: '0px 2px 1px black'}}>{item.expireMonth} oy</p>
                                <button className="btn btn-primary">ko'rish</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}