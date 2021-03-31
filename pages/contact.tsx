import Layout from '../components/layout'
import GoogleMapReact from 'google-map-react'
import { useRouter } from 'next/router'

import Style from '../styles/pages/contact/contact.module.css'

const defaultProps = {
    center: {
        lat: 13.734114,
        lng: 100.528321,
    },
    zoom: 17,
}

const Marker = props => {
    return <div><img className={Style.marker} src={props.img_src} /></div>
}


const imageSource = "https://www.flaticon.com/svg/static/icons/svg/924/924514.svg"

export default function Contact() {
    const { locale } = useRouter()
    return (
        <Layout>
            <div className={Style.container}>
                <div className={Style.body}>
                    <div className={Style.detail}>
                        <p>Homgroon Shop</p>
                        <p>214/17 Siam Paragon Bangkok</p>
                        <div className={Style.contact}>
                            <p>Contact: 081-4219084</p>
                        </div>
                        <div className={Style.socialMedia}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174848.svg"/>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg"/>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111498.svg"/>
                        </div>
                    </div>
                    {/* <div></div> */}
                    <div className={Style.googleMap}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                language: locale,
                                region: "th",
                                libraries: ["visualization", "places"],
                                // key:"google map api key",
                            }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} img_src={imageSource} />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>

        </Layout>
    )
}