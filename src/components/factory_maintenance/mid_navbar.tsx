// pages/[param].js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSearchParams } from "next/navigation";

export default function MidNavbar() {

    const pathname = usePathname()
    let content;

    const searchParam = useSearchParams();
    const id = searchParam.get("id")!;

    switch (pathname) {
        case '/navbarpages/factory_maintenance':
            content = '總覽';
            break;
    }
    return (
        <div>
            <div className="flex  flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="h-[10vh] w-full flex  items-center gap-5 px-6 relative flex-[0_0_auto] ">

                    <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className=" text-3xl ">
                                機廠檢修資訊/
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="text-3xl  text-[#397eff]">
                                {content}{id}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1 grow" />

                    <div className="inline-flex items-center justify-center gap-2.5 p-[5px] relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-end justify-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
                            <div className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)]  text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
                                上次更新時間
                            </div>
                            <p className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)]  text-[length:var(--title-title-medium-semi-font-size)] relative w-fit tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                                113 / 5 / 8&nbsp;&nbsp;(三) 12:20
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[5px] pt-2.5 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto] ">
                    <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">

                        <Link href={{
                            pathname: "/navbarpages/factory_maintenance",
                        }} className={`link ${pathname === '/navbarpages/factory_maintenance' ? 'mid_nav_active' : 'mid_nav_unactive'}`} >
                            <div className=" inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] ">
                                總覽
                            </div>
                        </Link>
                        <Link href={{
                            pathname: "/navbarpages/factory_maintenance/operational_lights",
                            query: { id: "車輛可營運燈號列表" },
                        }} className={`link ${id === '車輛可營運燈號列表' ? 'mid_nav_active' : 'mid_nav_unactive'}`}>
                            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] ">
                                車輛可營運燈號列表
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

