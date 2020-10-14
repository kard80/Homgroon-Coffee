import '../styles/global/global.css'

export default function App(props) {
    console.log(props)
    return <props.Component {...props.pageProps} />
}