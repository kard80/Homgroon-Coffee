import Style from './index.module.css'

const Hamburger = ({ isSidebar, setIsSidebar }) => {
    return (
        <div>
            <div onClick={() => setIsSidebar(!isSidebar)} className={Style.hamburger} >
                <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch1 : null}`} ></div>
                <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch2 : null}`}></div>
                <div className={`${Style.icon} ${isSidebar ? Style.iconSwitch3 : null}`}></div>
            </div>
        </div>
    )
}

export default Hamburger