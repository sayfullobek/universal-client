import React, {useEffect, useState} from "react";
import {embeddedGet} from "../serverConnect/service/Service";
import {Apis} from "../serverConnect/Apis";

export const Footer = () => {
    const [aware, setAware] = useState([])
    const getAll = async () => {
        try {
            await embeddedGet(Apis.aware, setAware, "embedded")
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
                        <h1 className="text-white" data-aos="fade-up" data-aos-delay="100">Universal Academy <strong>markazi</strong>.</h1>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="my-4">ma'lumotlar</h4>


                        {aware.map(item => (
                            item.about === "MALUMOT" ? (
                                <p className="mb-1">
                                    <i className={item.logo}/>
                                    {item.name}
                                </p>
                            ) : (<></>)
                        ))}

                        {aware.map(item => (
                            item.about === "LINK" ? (
                                <p>
                                    <a href={item.link}>
                                        <i className={item.logo}/>
                                        {item.name}
                                    </a>
                                </p>
                            ) : (<></>)
                        ))}


                    </div>

                    <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="my-4">biz haqimizda</h4>

                        {aware.map(item => (
                            item.about === "ADDRESS" ? (
                                <p>
                                    <i className={item.logo}/>
                                    {item.name}
                                </p>
                            ) : (<></>)
                        ))}
                    </div>

                    <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up"
                         data-aos-delay="400">
                        <p className="copyright-text">Direktor : To'xtayev Sayfullo
                            <br/>
                            <a rel="nofollow noopener" href="https://universal-academy.uz">universal-academy.uz</a></p>
                    </div>

                    <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">

                        <ul className="footer-link">
                            <li><a href="/contact">bog'lanish</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                        <ul className="social-icon">
                            {aware.map(item => (
                                item.about === "TARMOQ" ? (
                                    <li><a href={item.link} className={item.logo}/></li>
                                ) : (<></>)
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}