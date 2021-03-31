import Head from 'next/head'
import { useEffect, useState } from 'react'

import Login from '../Login/Login'

// Styles
import Style from '../../styles/layout/layout.module.css'
import Navbar from './navbar.js'
import Body from './body'
import Sidebar from './sidebar'



export default function Layout(props) {
  const [login, setLogin] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false)
  const dropOpacity = isSidebar ? { opacity: "30%" } : {}

  useEffect(() => {
    console.log(login)
  }, [login])
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homgroon coffee</title>
        <link rel="icon"
          href="https://www.flaticon.com/svg/static/icons/svg/924/924514.svg"
          type="image/x-icon"
        >

        </link>
      </Head>

      <div className={Style.body}>
        {login ?
          // <div className={Style.login}>
          <Login />
        // {/* </div>  */}
        :
        null
      }
        <Sidebar
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
          login={login}
          setLogin={setLogin}
        />
        <div className={Style.containerNavbar} style={dropOpacity}>
          <Navbar
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
            login={login}
            setLogin={setLogin}
          />
        </div>
        <Body content={props.children} />
      </div>
    </div>
  )
}

