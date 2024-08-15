'use client'
import Link from 'next/link'
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {DatePickerForm} from "@/components/ui/date_picker"

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
    const router = useRouter();
    const pathname = usePathname() || '';
    const searchParams = useSearchParams(); // Get search parameters from the URL

    let decodedLastPart = decodeURIComponent(pathname.split('/').pop() || '');
    const type = searchParams?.get('type') || ''; // Safely get 'type' parameter from the query string
    const date = searchParams?.get('date') || ''; // Safely get 'type' parameter from the query string

    if (decodedLastPart === 'train_deployment') {
        decodedLastPart = '總覽';
        if (type === 'unusual') {
            decodedLastPart = '非常態車輛';
        }
        if (type === 'power') {
            decodedLastPart = '動力車';
        }
    }

    const handleSelect = (value: string) => {
        router.push(`/navbarpages/train_deployment?type=${value}&date=${date}`);
    };


    return (
        <div className="w-screen flex flex-col px-6 sticky">
            <div className="h-[10vh]  flex items-center  justify-between  relative">
                <div className="flex items-center">
                    <span className="text-3xl">
                        車輛配置資訊/
                    </span>
                    <span className="text-3xl text-[#397eff]">
                        {decodedLastPart}
                    </span>
                </div>
                <DatePickerForm />

            </div>

            <div className="flex items-start gap-1">
                <Select value={type} onValueChange={handleSelect}>
                    <SelectTrigger className="w-fit">
                        <SelectValue placeholder={type === '' ? '總覽' : '非常態'} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">總覽</SelectItem>
                        <SelectItem value="power">動力車</SelectItem>
                        <SelectItem value="unusual">非常態車輛</SelectItem>
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
                        <div className="inline-flex h-10 items-center px-4">
                            {train.name}
                        </div>
                    </Link>
                ))}
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
