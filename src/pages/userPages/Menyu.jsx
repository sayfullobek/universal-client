import React, {useEffect, useState} from "react";
import working from '../../assets/usersStyle/images/working-girl.png'
import office from '../../assets/usersStyle/images/office.png'
import project1 from "../../assets/usersStyle/images/project/project-image01.jpg"
import avatar from "../../assets/usersStyle/images/female-avatar.png"
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import a from '../../assets/usersStyle/images/project/project-image02.jpg'
import {Course} from "./Course";


export const Menyu = () => {
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
        <div>
            <section className="hero hero-bg d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="hero-text">
                                <h1 className="text-white" data-aos="fade-up">Siz kelajakda o'z kareyerangizni
                                    zamonaviy sohalarda qurmoqchimisiz unda Universal Academy aynan siz uchun</h1>
                                <a href="/contact" className="custom-btn btn-bg btn mt-3" data-aos="fade-up"
                                   data-aos-delay="100">Biz bilan bog'lanish!</a>
                                {aware.map(item => (
                                    item.about === "PHONE_NUMBER" ? (
                                        <strong className="d-block py-3 pl-5 text-white" data-aos="fade-up"
                                                data-aos-delay="200"><i className="fa fa-phone mr-2"/>
                                            {item.name}
                                        </strong>
                                    ) : (
                                        <></>
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
                                <img src={working} className="img-fluid"
                                     alt="working girl"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="about section-padding pb-0" id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7 mx-auto col-md-10 col-12">
                            <div className="about-info">

                                <h2 className="mb-4" data-aos="fade-up">Universal Academy <strong>QULAY VA SIFATLI
                                </strong> ta'lim olish uchun eng yaxshi tanlov <br/><br/><strong>JOYLASHUV
                                </strong> Shahrisabz shahar TOJ-MAHAL to'yxonasi ro'parasida</h2>

                                <p className="mb-0" data-aos="fade-up">Universal Academydagi kurslar haqida ma'lumot
                                    olish <a href="blog.html">kurslarimiz</a> bo'limini tanlang, <br/>
                                    Biz bilan bog'lanish uchun <a href="/contact">xabar yuborish</a> bo'limini tanlang
                                </p>
                            </div>

                            <div className="about-image" data-aos="fade-up" data-aos-delay="200">

                                <img src={office} className="img-fluid"
                                     alt="office"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Course/>
            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="contact-image" data-aos="fade-up">
                                <img src={avatar} className="img-fluid"
                                     alt="website"/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-7 col-12">
                            <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Siz uchun</h4>

                            <div className="quote" data-aos="fade-up" data-aos-delay="200"/>

                            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Siz kelajakda yaxshi va
                                daromadli kasblarni egallashni hohlasangiz. Bizning kurslarimiz siz uchun</h2>

                            <p data-aos="fade-up" data-aos-delay="400">
                                <strong>Kurslar xaqidagi ma'lumot</strong>
                                <span id="navbarNav" className="mx-1">/<a href="/#blog"
                                                                          className={"text-dark"}> kurslar</a></span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}