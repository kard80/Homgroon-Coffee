import Head from 'next/head'


import Navbar from './navbar'
import Body from './body'

import Style from '../../styles/layout/layout.module.css'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homgroon coffee</title>
      </Head>
      <div className={Style.body}>
        <Navbar />
        <Body content={props.children} />
      </div>
    </div>
  )
}