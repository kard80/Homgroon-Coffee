import Style from '../styles/pages/delivery/delivery.module.css'
import Layout from '../components/layout'


export default function delivery() {
    return (
        <Layout>
            <div className={Style.containerDelivery}>
                <div className={Style.body}> 
                    <img src="https://unsplash.com/a/img/empty-states/photos.png" />
                    <h1>Coming soon....</h1>
                </div>
            </div>
        </Layout>
    )
}