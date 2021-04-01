import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NotFound() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])
    return (
        <div>
            <h1>Page not Found</h1>
            <p>Go back <Link href='/'><a>Home</a></Link> safely.</p>
        </div>
    )
}
