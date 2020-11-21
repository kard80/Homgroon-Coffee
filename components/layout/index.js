import Head from 'next/head'


import Navbar from './navbar'
import Body from './body'
import Sidebar from './sidebar'

import Style from '../../styles/layout/layout.module.css'
import { useState } from 'react'


export default function Layout(props) {
  const [isSidebar, setIsSidebar] = useState(false)
  const dropOpacity = isSidebar ? { opacity: "30%"} : {}

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homgroon coffee</title>
      </Head>

      <div className={Style.body}>
          <Sidebar isSidebar={isSidebar} />
        <div style={dropOpacity}>
          <Navbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        </div>
        <Body content={props.children} />
      </div>
    </div>
  )
}