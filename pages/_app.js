import '../styles/global/global.css'

export default function App(props) {
    return <props.Component {...props.pageProps} />
}