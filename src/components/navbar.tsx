'use client'
import React, { Suspense } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ModeToggle } from "@/components/ui/mode_toggle"
import "@/styles/globals.css"

const Navbar: React.FC = () => {

    const pathname = usePathname()

    return (
    <div>
        <div className="flex h-[8vh] w-screen  items-center gap-3 px-5 py-3  self-stretch inline-flex  flex-[0_0_auto]">
                <div className="relative  w-8 h-8 bg-[url(/icon-menu.svg)] bg-cover bg-[50%_50%]" />


                <div className="inline-flex items-center gap-3 px-1 py-0 relative flex-[0_0_auto]">
                    <Link href="/">
                        <div className="relative w-20 h-16 bg-[url(/ibm-logo-frame.svg)] bg-cover bg-[50%_50%]" />
                    </Link>
                </div>
                <div className="relative flex-1 grow" />
                <Link className={`link ${pathname.startsWith('/navbarpages/train_deployment') ? 'active' : ''}`} href="/navbarpages/train_deployment">
                    <div className=" inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            車輛配置資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname.startsWith('/navbarpages/locomotive_depot') ? 'active' : ''}`} href="/navbarpages/locomotive_depot">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            機務段配置資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname.startsWith('/navbarpages/factory_maintenance') ? 'active' : ''}`} href="/navbarpages/factory_maintenance">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            機廠檢修資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname.startsWith('/navbarpages/fault_notification') ? 'active' : ''}`} href="/navbarpages/fault_notification">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            故障通報
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname.startsWith('/navbarpages/inventory_performance') ? 'active' : ''}`} href="/navbarpages/inventory_performance">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            庫存績效
                        </div>
                    </div>
                </Link>

                <div className="flex w-[54px] items-center justify-center gap-2.5 p-1 relative bg-neutral-100 rounded-2xl overflow-hidden">
                    <ModeToggle />
                </div>
            </div>
        </div>

    )

}

export default function Page() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
    );
  }