import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


function NotFound() {
    const route  = useRouter()

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        },3000)
    },[])
    return (
        <div className='not-found'>
            <h1>OOps, That page does not exist</h1>
            <p>Go bac to the <Link href='/'><a>Home Page</a></Link></p>
        </div>
    )
}

export default NotFound
