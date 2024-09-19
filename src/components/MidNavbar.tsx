"use client";
import Link from "next/link";
import React from "react";
import { DatePickerForm } from "@/components/ui/date_picker";
import { usePathname, useSearchParams } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
}

interface MidNavbarProps {
  navItems: NavItem[];
}

const MidNavbar: React.FC<MidNavbarProps> = ({ navItems }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  // Find the active item based on the current pathname
  const activeItem = navItems.find(item => pathname === item.path);

  return (
    <div className="w-full px-6 space-y-2 sticky">
      <div className="h-fit flex items-center justify-between relative">
        <div className="flex items-center">
          <span className="text-2xl ">車輛配置資訊 /</span>
          {/* TODO:間隔放大 */}
          <span className="text-2xl text-[#397eff]">
            {activeItem ? activeItem.name : '總覽'}
          </span>
        </div>
        <DatePickerForm />
      </div>

      <div className="flex items-start gap-1">
        {navItems.map((item) => (
          <Link key={item.name} href={`${item.path}?date=${date}`}>
            <div
              className={`inline-flex h-fit items-center px-4 py-2 ${
                pathname === item.path ? 'mid_nav_active' : 'mid_nav_unactive'
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MidNavbar;
