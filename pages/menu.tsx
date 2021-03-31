import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Style from '../styles/pages/menu/menu.module.css'
import { useRouter } from 'next/router'
import th from '../public/locales/th/menu.json'
import en from '../public/locales/en/menu.json'
export default function Menu() {
    const [data, setData] = useState<menuData[]>(payloadMenuData)
    const [menuType, setMenuType] = useState<menuType[]>(payloadMenuType)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [displayModal, setDisplayModal] = useState<object>({ display: "none" })
    const [opacity, setOpacity] = useState<object>({ opacity: "100%" })
    const [serach, setSearch] = useState<string>("")
    const [coffee, setCoffee] = useState([])
    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    let t
    locale == "th" ? t = th : t = en
    // useEffect(() => {
    //     setMenuType(payloadMenuType)
    // }, [data, menuType])

    const showModal = () => {
        setIsShow(!isShow)
        if (isShow) {
            setDisplayModal({ display: "none" })
        } else {
            setDisplayModal({ display: "block" })
        }
    }

    const searchText = (text: string) => {
        payloadMenuData.filter(menu => {
        })
    }

    return (
        <Layout>
            <Modal
                showModal={showModal}
                displayModal={displayModal}
            />
            <div
                className={Style.mobileContainer}
                style={opacity}
            >
                <div >
                    <h1>{t.hello}</h1>
                    <h1>Menu</h1>
                </div>
                <div className={Style.filter}>
                    <input value={serach} onChange={e => searchText(e.target.value)} />
                    <select>
                        <option value="">All</option>
                        {menuType.map(item => (
                            <option>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div className={Style.menuTitle}>
                    <h1>Coffee</h1>
                </div>

                { }
                <div className={Style.menuList}>
                    {data.map(item => (
                        <div className={Style.menu} onClick={() => showModal()}>
                            <div className={Style.menuImage}>
                                <img src="https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80" />
                            </div>
                            <div className={Style.menuName}>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Style.menuTitle}>
                    <h1>Bakery</h1>
                </div>
                <div className={Style.menuList}>
                    {data.map(item => (
                        <div className={Style.menu} onClick={() => showModal()}>
                            <div className={Style.menuImage}>
                                <img src="https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80" />
                            </div>
                            <div className={Style.menuName}>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

const Modal = ({ showModal, displayModal }) => {
    return (
        <div
            className={Style.modal}
            style={displayModal}
        >
            <div className={Style.container}>
                <div className={Style.contentBody}>
                    <div className={Style.header}>
                        <h1>ลาเต้</h1>
                        <p>กาแฟเข้มข้นหอมกลิ่มนมร้อน ผสมกับความใส่ใจทุกขั้นตอนการผลิต</p>
                    </div>
                    <div className={Style.menuTable}>
                        <div className={Style.line}></div>
                        <div className={Style.menu}>
                            {/* Row1 */}
                            <div></div>
                            <div className={Style.rightMenu}>S</div>
                            <div className={Style.rightMenu}>M</div>
                            <div className={Style.rightMenu}>L</div>
                            {/* Row2 */}
                            <div>Hot</div>
                            <div className={Style.rightMenu}>30</div>
                            <div className={Style.rightMenu}>35</div>
                            <div className={Style.rightMenu}>40</div>
                            {/* Row3 */}
                            <div>Cold</div>
                            <div className={Style.rightMenu}>35</div>
                            <div className={Style.rightMenu}>40</div>
                            <div className={Style.rightMenu}>45</div>
                            {/* Row4 */}
                            <div>Frappe</div>
                            <div className={Style.rightMenu}>40</div>
                            <div className={Style.rightMenu}>45</div>
                            <div className={Style.rightMenu}>50</div>
                        </div>
                        <div className={Style.line}></div>
                    </div>
                    <div className={Style.closeButton}>
                        <button onClick={showModal} >Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

interface menuData {
    "_id": string,
    "name": string,
    "detail": string,
    "image": string,
}

interface menuType {
    "_id": string,
    "name": string,
}

const payloadMenuData: menuData[] = [
    {
        "_id": "1",
        "name": "Capucino",
        "detail": "coffee with milk and milk foam",
        "image": "capucino.jpeg",
    },
    {
        "_id": "2",
        "name": "Latte",
        "detail": "coffee with milk",
        "image": "latte.jpeg",
    },
    // {
    //     "_id": "3",
    //     "name": "Americano",
    //     "detail": "coffee and hot water",
    //     "image": "americano.jpeg",
    // },
    // {
    //     "_id": "4",
    //     "name": "Expresso",
    //     "detail": "pure shot of coffee",
    //     "image": "expresso.jpeg",
    // }
]

const payloadMenuType: menuType[] = [
    {
        "_id": "1",
        "name": "Coffee",
    },
    {
        "_id": "2",
        "name": "Bakery",
    }
]

