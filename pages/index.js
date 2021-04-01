import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaList | Home</title>
      </Head>
      <div>
          <h1 className={styles.title}>Next Js</h1>
          <p className={styles.text}>This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
  Use equal casing. Compare these module identifiers:
  * E:\Devstuff\NUXTJS\ninjalist\node_modules\next\dist\build\webpack\loaders\next-client-pages-loader.js?page=%2FNinjas&absolutePagePath=E%3A%5CDevstuff%5CNUXTJS%5Cninjalist%5Cpages%5CNinjas%5Cindex.js!
  * E:\Devstuff\NUXTJS\ninjalist\node_modules\next\dist\build\webpack\loaders\next-client-pages-loader.js?page=%2Fninjas&absolutePagePath=E%3A%5CDevstuff%5CNUXTJS%5Cninjalist%5Cpages%5Cninjas%5Cindex.js!</p>
  <Link href="/ninjas" ><a className={styles.btn}>View ALl Ninjas</a></Link>
      </div>
    </>
  )
}
