import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Style from '../styles/pages/home/home.module.css'

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(0)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth)
    })
  })
  return (
    innerWidth >= 961 ?
      displayDesktop() :
      displayMobile()
  )
}

const displayMobile = () => {
  return (
    <Layout>
      <div className={Style.container}>
        <div className={Style.intro}>
          <h1>Homgroon in service</h1>
          <br />
        </div>
        <div className={Style.detail}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec at ipsum non ante eleifend pulvinar.
            Nam lobortis quam vitae metus ultrices viverra.
            Aliquam erat volutpat.
            Quisque nec commodo arcu.
        </p>
        </div>
        <div className={Style.coverImage}></div>
        <div className={Style.detail}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec at ipsum non ante eleifend pulvinar.
            Nam lobortis quam vitae metus ultrices viverra.
            Aliquam erat volutpat.
            Quisque nec commodo arcu.
        </p>
        </div>
        <div className={Style.coverImage2}></div>
        <div className={Style.coverImage3}></div>
      </div>
    </Layout>
  )
}

const displayDesktop = () => {
  return (
    <Layout>
      <div className={Style.container}>
        <div className={Style.intro}>
          <h1>Homgroon in service</h1>
          <br />
        </div>
        <div className={Style.section}>
          <div className={Style.section1}>
            <div className={Style.detail}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec at ipsum non ante eleifend pulvinar.
                Nam lobortis quam vitae metus ultrices viverra.
                Aliquam erat volutpat.
                Quisque nec commodo arcu.
                </p>
            </div>
            <div className={Style.hook}>
              <p>Coffee Today</p>
              <div className={Style.line}></div>
            </div>
            <div className={Style.coverImage1}></div>
          </div>

          <div className={Style.section1}>
            <div className={Style.coverImageDeskTop2}></div>
            <div className={Style.hook}>
              <p>Amazing Baked</p>
              <div className={Style.line}></div>
            </div>
            <div className={Style.detail}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec at ipsum non ante eleifend pulvinar.
                Nam lobortis quam vitae metus ultrices viverra.
                Aliquam erat volutpat.
                Quisque nec commodo arcu.
            </p>
            </div>
          </div>

          <div className={Style.section1}>
            <div className={Style.detail}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec at ipsum non ante eleifend pulvinar.
                Nam lobortis quam vitae metus ultrices viverra.
                Aliquam erat volutpat.
                Quisque nec commodo arcu.
            </p>
            </div>
            <div className={Style.hook}>
              <p>Twilight Drop</p>
              <div className={Style.line}></div>
            </div>
            <div className={Style.coverImageDeskTop3}></div>
          </div>
        </div>

        <div className={Style.footer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec at ipsum non ante eleifend pulvinar.
            Nam lobortis quam vitae metus ultrices viverra.
            Aliquam erat volutpat.
            Quisque nec commodo arcu.
        </p>
        </div>
      </div>
    </Layout>
  )
}