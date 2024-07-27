// pages/[param].js
'use client'
import Link from 'next/link'
import React, { Suspense } from "react";
import { usePathname } from 'next/navigation'


const trainTypes = [
    { id: "城際列車", name: "城際列車" },
    { id: "通勤列車", name: "通勤列車" },
    { id: "電力機車", name: "電力機車" },
    { id: "柴電機車", name: "柴電機車" },
    { id: "柴液機車", name: "柴液機車" },
    { id: "柴油客車", name: "柴油客車" },
    { id: "客車", name: "客車" },
    { id: "貨車", name: "貨車" }
];


const MidNavbar: React.FC = () => {

    const pathname = usePathname()|| ''
    let content;
    const lastPartOfPath = pathname.split('/').pop()|| '';
    const decodedLastPart = decodeURIComponent(lastPartOfPath);

    switch (pathname) {
        case '/navbarpages/train_deployment':
            content = '總覽';
            break;
    }

    return (
        <div>
            <div className=" w-screen flex  flex-col items-center sticky self-stretch  flex-[0_0_auto]">
                <div className="h-[10vh] w-full flex  items-center gap-5 px-6 relative flex-[0_0_auto] ">

                    <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className=" text-3xl ">
                                車輛配置資訊/
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="text-3xl  text-[#397eff]">
                                {content}{decodedLastPart}
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


                <div className=" flex flex-col items-center justify-center px-6 relative self-stretch w-full flex-[0_0_auto] ">
                    <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">

                        <Link href={{
                            pathname: "/navbarpages/train_deployment",
                        }} className={`link ${pathname === '/navbarpages/train_deployment' ? 'mid_nav_active' : 'mid_nav_unactive'}`} >
                            <div className=" inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] ">
                                總覽
                            </div>
                        </Link>

                        {trainTypes.map(train => (
                            <Link
                            href={{
                              pathname: `/navbarpages/train_deployment/certain_train/${train.name}`,
                            }}
                            className={`link ${decodedLastPart === train.name ? 'mid_nav_active' : 'mid_nav_unactive'}`}
                            key={train.id}
                          >
                            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto]">
                              {train.name}
                            </div>
                          </Link>
                        ))}



                    </div>
                </div>
            </div>
        </div>

    );
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MidNavbar />
        </Suspense>
    );
}