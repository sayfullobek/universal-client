import React, {useState} from "react";
import {toast} from "react-toastify";
import {SendMessage} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const forms = [
        {name: 'Ismingizni kiriting', id: 'name', value: name, setValue: setName, type: 'text'},
        {
            name: 'telefon raqamingiz masalan : 990009988',
            id: 'phoneNumber',
            value: phoneNumber,
            setValue: setPhoneNumber,
            type: "number"
        },
        {name: 'xabar yozish', id: 'message', value: message, setValue: setMessage, type: "textarea"},
    ]

    const sendMessage = async (e) => {
        e.preventDefault()
        const check = {
            name: name.trim().length === 0,
            phoneNumber: phoneNumber.trim().length !== 9,
        }
        if (check.name) {
            return toast.warning("malumot kiritish shart")
        }
        if (check.phoneNumber) {
            return toast.warning("telefon raqamingizni to'g'ri kiriting")
        }

        const date = new Date();
        const data = {
            name, phoneNumber, date, message
        }

        await SendMessage(data, Apis.message);
        setName("")
        setPhoneNumber("")
        setMessage("")
    }
    return (
        <div>
            <section className="contact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">

                            <h1 className="mb-4">Biz bilan bog'lanish uchun <strong>Universal
                                Academy</strong> ga <strong>xabar</strong> qoldiring va siz bilan bog'lanamiz
                            </h1>

                            <p>Ismingizni to'liq kiriting</p>
                            <p>Telefon raqamingiz to'g'ri bo'lishi shart <br/><br/><strong>Sizni qiziqtirgan </strong>savolingizni
                                qoldiring</p>
                        </div>

                        <div className="col-lg-8 mx-auto col-md-10 col-12">


                            <form className="contact-form" data-aos="fade-up"
                                  data-aos-delay="300"
                                  role="form" onSubmit={sendMessage}>
                                <div className="row">
                                    {forms.map(item => (
                                        item.type === "textarea" ? (
                                            <div className="col-lg-12 col-12">
                                                <textarea className="form-control" rows="6" name={item.id}
                                                          value={item.value}
                                                          onChange={e => item.setValue(e.target.value)}
                                                          placeholder={item.name}/>
                                            </div>
                                        ) : (

                                            < div className="col-lg-6 col-12">
                                                <input type={item.type} className="form-control" name={item.id}
                                                       placeholder={item.name} value={item.value}
                                                       onChange={e => item.setValue(e.target.value)}/>
                                            </div>
                                        )
                                    ))}

                                    <div className="col-lg-5 mx-auto col-7">
                                        <button className="form-control" id="submit-button">
                                            xabar yuborish
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
            {/*<div className="google-map" data-aos="zoom-in">*/}
            {/*    <iframe*/}
            {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11196.961132529668!2d-43.38581128725845!3d-23.011063013218724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1568649412152!5m2!1sen!2sth"*/}
            {/*        width="1920" height="600" frameborder="0" style="border:0;" allowfullscreen=""/>*/}
            {/*</div>*/}
        </div>
    )
}