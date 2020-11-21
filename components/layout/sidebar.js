import Style from '../../styles/layout/layout.module.css'


const Sidebar = ({isSidebar}) => {
    const fading = isSidebar? {width: "80vw"}: {width: "0px"}
    return (
        <div className={Style.sidebar} style={fading}>
            <div className={Style.container}>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Delivery</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar