import React from "react";
import {Link, useLocation} from "react-router-dom";

export const NavBar = () => {
    const location = useLocation().pathname
    const link = [
        {name: 'biz haqimizda', link: '#about', type: 'about'},
        {name: 'kurslarimiz', link: '#project', type: 'about'},
        {name: "biz bilan bog'lanish", link: '/contact', type: "btn"},
    ]
    return (
        <nav className="navbar navbar-expand-lg" style={{boxShadow: 'none'}}>
            <div className="container">
                <a className="navbar-brand text-light" href={"/"}>
                    <i className="bi bi-hospital"/>
                    <span> Universal</span> Academy
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {link.map(item => (
                            <li className="nav-item">
                                <a href={item.link}
                                   className={item.type === "btn" ? "nav-link contact" : "nav-link text-light"}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}