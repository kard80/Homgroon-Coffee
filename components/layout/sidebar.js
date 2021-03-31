import {useState} from 'react'
import Style from '../../styles/layout/layout.module.css'
import Hamburger from '../Hamburger'
import Link from 'next/link'

import Login from '../Login/Login'


const Sidebar = ({ isSidebar, setIsSidebar, login, setLogin }) => {
    const fading = isSidebar ? { width: "80vw" } : { width: "0px" }
    return (
        <div className={Style.sidebar} style={fading}>
            <div style={isSidebar ? null : { opacity: "0%" }} className={Style.showSidebar}>
                <Hamburger isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
            </div>
            <div className={Style.container}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/delivery">
                            <a>Delivery</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => {setLogin(true),setIsSidebar(false)}}>LOGIN</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar