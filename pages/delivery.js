import Link from 'next/link'
import Layout from '../components/layout'


export default function delivery() {
 return (
     <Layout home>
         <Link href="/">Home</Link>
         <h1>This is delivery page</h1>
     </Layout>
 )
}