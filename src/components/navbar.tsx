'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode_toggle"
import "@/styles/globals.css"

export default function Navbar() {
    const pathname = usePathname()

    return <div>

        <Link  href="/">
            <Button className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Button> 
        </Link> 
        <Link className={`link ${pathname === '/navbarpages/factory_maintenance' ? 'active' : ''}`} href="/navbarpages/factory_maintenance">
        factory_maintenance
        </Link>
        <Link className={`link ${pathname === '/navbarpages/fault_notification' ? 'active' : ''}`} href="/navbarpages/fault_notification">
        fault_notification
        </Link>
        <Link className={`link ${pathname === '/navbarpages/locomotive_depot' ? 'active' : ''}`} href="/navbarpages/locomotive_depot">
        locomotive_depot
        </Link>
        <Link className={`link ${pathname === '/navbarpages/maintenance_materials' ? 'active' : ''}`} href="/navbarpages/maintenance_materials">
        maintenance_materials
        </Link>
        <Link className={`link ${pathname === '/navbarpages/train_deployment' ? 'active' : ''}`} href="/navbarpages/train_deployment">
        train_deployment
        </Link>

        <ModeToggle />
    </div>

}