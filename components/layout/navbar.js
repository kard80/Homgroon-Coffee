import { useState, useEffect } from 'react'
import Hamburger from '../Hamburger'
import Style from '../../styles/layout/layout.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import th from '../../public/locales/th/navbar.json'
import en from '../../public/locales/en/navbar.json'


const Navbar = ({ isSidebar, setIsSidebar, login, setLogin }) => {
    const {locale, pathname} = useRouter()
    const [innerWidth, setInnerWidth] = useState(0)
    

    let t = locale == "en"? en: th
    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    return (
        <nav className={Style.navbar} >
            <div className={Style.section}>
                <div className={Style.leftSection}>
                    {innerWidth >= 961 ?
                        <h3>{t.titleDesktop}</h3> :
                        <h3>{t.titleMobile}</h3>}
                </div>
                <div className={Style.middleSection}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>{t.home}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/menu">
                                <a>{t.menu}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/delivery">
                                <a>{t.delivery}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>{t.contact}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Style.rightSection}>
                    <button onClick={() => setLogin(!login)}>{t.login}</button>
                    {
                        locale == "en"?
                    <Link href= {pathname} locale="th">
                        <a>EN</a>
                    </Link>:
                    <Link  href= {pathname} locale="en">
                        <a>TH</a>
                    </Link>
                    }
                </div>
                <div className={Style.hamburger}>
                    <Hamburger isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar