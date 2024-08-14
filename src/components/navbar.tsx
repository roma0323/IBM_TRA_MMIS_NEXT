'use client'

import React, { Suspense } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ModeToggle } from "@/components/ui/mode_toggle";
import Image from 'next/image';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: "/navbarpages/train_deployment?type=all", label: "車輛配置資訊", startsWith: "/navbarpages/train_deployment" },
        { href: "/navbarpages/locomotive_depot", label: "機務段配置資訊", startsWith: "/navbarpages/locomotive_depot" },
        { href: "/navbarpages/factory_maintenance", label: "機廠檢修資訊", startsWith: "/navbarpages/factory_maintenance" },
        { href: "/navbarpages/fault_notification", label: "故障通報", startsWith: "/navbarpages/fault_notification" },
        { href: "/navbarpages/inventory_performance", label: "庫存績效", startsWith: "/navbarpages/inventory_performance" },
    ];

    return (
        <div className="flex h-[8vh] w-screen items-center gap-3 px-5 py-3">
            <Link href="/">
                <Image
                    className="relative hover:scale-110"
                    alt="IBM Logo"
                    src="/ibm-logo-frame.svg"
                    width={64}
                    height={64}
                />
            </Link>
            <div className="flex-1" />
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`link ${pathname?.startsWith(link.startsWith) ? 'active' : ''}`}
                >
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 rounded-[30px]">
                        {link.label}
                    </div>
                </Link>
            ))}
            <div className="flex w-[54px] items-center justify-center p-1 bg-neutral-100 rounded-2xl">
                <ModeToggle />
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
        </Suspense>
    );
}
