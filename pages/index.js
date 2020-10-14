import Layout from '../components/layout'
import Style from '../styles/home/home.module.css'

export default function Home() {
  return (
    <Layout >
      <div className={Style.intro}>
        <div className={Style.test}>
          <h1>Homgroon in service</h1>
          <br />
        </div>
      </div>
      <div className={Style.detail}>
        {/* <p>Ho</p> */}
      </div>
    </Layout>
  )
}