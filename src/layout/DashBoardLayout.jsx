import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from '../component/Header'
import {SideBar} from '../component/SideBar'
import {NotFound} from '../pages/NotFound'

export const DashBoardLayout = () => {
    const token = localStorage.getItem("token")
    const [btn, setBtn] = useState(false)
    return (
        <>
            {token ? (
                <div className='container-fluid page-body-wrapper'>
                    <Header setBtn={setBtn}/>
                    <SideBar/>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound/>
            )}
        </>

    )
}