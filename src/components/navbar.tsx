'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import "@/styles/globals.css"

export default function Navbar() {
    const pathname = usePathname()

    return <div>

        <Link  href="/">
            <Button className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Button> 
        </Link> 
        <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
        dashboard
        </Link>
        <Link className={`link ${pathname === '/dashboard/detail' ? 'active' : ''}`} href="/dashboard/detail">
        detail
        </Link>
    </div>

}