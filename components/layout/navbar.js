import { useState } from 'react'
import Style from '../../styles/layout/layout.module.css'


const Navbar = ({ isSidebar, setIsSidebar }) => {
    return (
        <nav className={Style.navbar} >
            <div className={Style.section}>
                <div className={Style.leftSection}>
                    <h3>Homgroon</h3>
                </div>
                <div className={Style.rightSection}>
                    <div onClick={() => setIsSidebar(!isSidebar)} className={Style.hamburger} >
                        <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch1 : null}`} ></div>
                        <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch2 : null}`}></div>
                        <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch3 : null}`}></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar