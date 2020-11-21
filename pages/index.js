import Layout from '../components/layout'
import Style from '../styles/home/home.module.css'

export default function Home() {
  return (
    <Layout >
      <div className={Style.intro}>
          <h1>Homgroon in service</h1>
          <br />
      </div>
      <div className={Style.detail}>
        
      </div>
    </Layout>
  )
}