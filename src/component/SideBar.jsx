import React from "react";
import {Link, useLocation} from "react-router-dom";

export const SideBar = () => {
    const location = useLocation().pathname;
    const sideBardUtils = [
        {type: 'premitive', name: 'Dashboard', icon: 'icon-grid menu-icon', link: '/auth/universal-academy/admin'},
        {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/universal-academy/admin/aware'
        }, {
            type: 'premitive',
            name: 'kurs',
            icon: 'bi bi-people-fill menu-icon',
            link: '/auth/universal-academy/admin/course'
        },
        {
            type: 'premitive',
            name: 'xabarlar',
            icon: 'bi bi-chat-right-dots menu-icon',
            link: '/auth/universal-academy/admin/message'
        },
    ]
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                {sideBardUtils.map(item => (
                    item.type === "non" ? (
                        <li className="nav-item">
                            <a className="nav-link" href={item.link} data-toggle="collapse" href={`#ui-basic`}
                               aria-expanded="false" aria-controls={`ui-basic`}>
                                <i className="icon-layout menu-icon"/>
                                <span className="menu-title">{item.name}</span>
                                <i className="menu-arrow"/>
                            </a>
                            <div className="collapse" id={`ui-basic`}>
                                <ul className="nav flex-column sub-menu">
                                    {item.sub.map(i => (
                                        <li className="nav-item">
                                            <Link className="nav-link" style={location === i.link ? {
                                                backgroundColor: '#6610f2',
                                                color: 'white'
                                            } : {}} to={i.link}>
                                                <i className={i.icon}
                                                   style={location === i.link ? {color: 'white'} : {}}/>
                                                <span className="menu-title">{i.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link"
                                  style={location === item.link ? {
                                      backgroundColor: 'rgba(79,110,210,0.5)',
                                      color: 'white'
                                  } : {}}
                                  to={item.link}>
                                <i className={item.icon} style={location === item.link ? {color: 'white'} : {}}/>
                                <span className="menu-title">{item.name}</span>
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </nav>
    )
}