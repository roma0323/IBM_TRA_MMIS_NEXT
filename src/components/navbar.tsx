'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ModeToggle } from "@/components/ui/mode_toggle"
import "@/styles/globals.css"

export default function Navbar() {
    const pathname = usePathname()

    return <div>
        <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex w-[1440px] items-center gap-5 px-5 py-3 relative self-stretch ">
                <div className="relative  w-8 h-8 bg-[url(/icon-menu.svg)] bg-cover bg-[50%_50%]" />


                <div className="inline-flex items-center gap-3 px-1 py-0 relative flex-[0_0_auto]">
                    <Link href="/">
                        <div className="relative w-20 h-[58.18px] bg-[url(/IBM-LOGO-frame.svg)] bg-cover bg-[50%_50%]" />
                    </Link>
                    <div className="relative w-fit font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        新 MMIS 績效管理指標
                    </div>
                </div>
                <div className="relative flex-1 grow h-[19px]" />
                <Link className={`link ${pathname === '/navbarpages/train_deployment' ? 'active' : ''}`} href="/navbarpages/train_deployment">
                    <div className=" inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            車輛資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname === '/navbarpages/locomotive_depot' ? 'active' : ''}`} href="/navbarpages/locomotive_depot">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            機務段配置資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname === '/navbarpages/factory_maintenance' ? 'active' : ''}`} href="/navbarpages/factory_maintenance">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            機廠檢修資訊
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname === '/navbarpages/fault_notification' ? 'active' : ''}`} href="/navbarpages/fault_notification">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            故障通報
                        </div>
                    </div>
                </Link>

                <Link className={`link ${pathname === '/navbarpages/maintenance_materials' ? 'active' : ''}`} href="/navbarpages/maintenance_materials">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)]  text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                            檢修動態
                        </div>
                    </div>
                </Link>

                <div className="flex w-[54px] items-center justify-center gap-2.5 p-1 relative bg-neutral-100 rounded-2xl overflow-hidden">
                    <ModeToggle />
                </div>
            </div>
        </div>








    </div>



}

