import Style from '../../styles/layout/layout.module.css'

const body = ({content}) => {
    return (
        <section className={Style.section}>
            {content}
        </section>
    )
}

export default body