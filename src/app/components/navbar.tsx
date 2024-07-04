'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import "../globals.css"

export default function Navbar() {
    const pathname = usePathname()

    return <div>

        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
        </Link> 
        <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
        dashboard
        </Link>
        <Link className={`link ${pathname === '/dashboard/detail' ? 'active' : ''}`} href="/dashboard/detail">
        detail
        </Link>
    </div>

}