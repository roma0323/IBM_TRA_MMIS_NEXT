'use client'
import Link from 'next/link'
import React, { Suspense } from "react";
import { usePathname, useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
    const router = useRouter(); // Initialize useRouter
    const pathname = usePathname() || '';
    let decodedLastPart = decodeURIComponent(pathname.split('/').pop() || '');

    if (decodedLastPart === 'train_deployment') {
        decodedLastPart = '總覽';
    }

    const handleSelect = (value: string) => {
        let queryParam = '';
        switch (value) {
            case "overview_all":
                router.push('/navbarpages/train_deployment'); // Navigate to the link
                break;
            case "overview_power":
                queryParam = '?type=power';
                break;
            case "overview_unusally_used":
                queryParam = '?type=unusual';
                break;
            default:
                break;
        }

        if (queryParam) {
            router.push(`/navbarpages/train_deployment${queryParam}`);
        }
    };

    return (
        <div className="w-screen flex flex-col items-center sticky self-stretch">
            <div className="h-[10vh] w-full flex items-center gap-5 px-6 relative">
                <div className="flex items-center">
                    <span className="text-3xl">
                        車輛配置資訊/
                    </span>
                    <span className="text-3xl text-[#397eff]">
                        {decodedLastPart}
                    </span>
                </div>
                <div className="flex-1" />

                <div className="flex items-center gap-2.5 p-[5px]">
                    <div className="flex flex-col items-end justify-center gap-[5px] p-2.5 rounded-[5px] overflow-hidden">
                        <span className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)]  text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
                            上次更新時間
                        </span>
                        <p className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)]  text-[length:var(--title-title-medium-semi-font-size)] relative w-fit tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                            113 / 5 / 8&nbsp;&nbsp;(三) 12:20
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-6 w-full">
                <div className="flex items-start gap-[5px] w-full">
                    <Select onValueChange={handleSelect}>
                        <SelectTrigger className="w-fit">
                            <SelectValue placeholder="總覽" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="overview_all">總覽</SelectItem>
                            <SelectItem value="overview_power">動力車</SelectItem>
                            <SelectItem value="overview_unusally_used">非常態車輛</SelectItem>
                        </SelectContent>
                    </Select>

                    {trainTypes.map(train => (
                        <Link
                            href={{
                                pathname: `/navbarpages/train_deployment/certain_train/${train.name}`,
                            }}
                            className={`link ${decodedLastPart === train.name ? 'mid_nav_active' : 'mid_nav_unactive'}`}
                            key={train.id}
                        >
                            <div className="inline-flex h-10 items-center px-4 py-0">
                                {train.name}
                            </div>
                        </Link>
                    ))}
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
