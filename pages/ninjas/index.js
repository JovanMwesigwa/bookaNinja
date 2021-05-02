import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

function NinjaList({ ninjas }) {
    return (
        <>
            <Head>
                <title>Bookabie | Ninja list</title>
            </Head>
            <div>
                <h1>Ninja Listing</h1>
                {
                    ninjas.map(ninja => (
                        <Link href={`/ninjas/${ninja.id}`} key={ninja.id} >
                            <div className={styles.single}>
                                <h3 >{ ninja.name }</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default NinjaList
