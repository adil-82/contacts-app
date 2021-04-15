import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Contacts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl text-red-500 ">Hello World</h1>
    </div>
  )
}
