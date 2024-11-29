"use client";

import { ColumnDef } from "@tanstack/react-table";
import { factorySumStatus } from "@/types/type";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<factorySumStatus>[] = [
  {
    accessorKey: "carcatalog",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        車種
      </span>
    ),
  },
  {
    accessorKey: "deptdesc",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        廠別
      </span>
    ),
  },
  {
    accessorKey: "cartype",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        車型
      </span>
    ),
  },
  {
    accessorKey: "assetnum",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        車組/車號
      </span>
    ),
  },
  {
    accessorKey: "worktype",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        檢修級別
      </span>
    ),
  },
  {
    accessorKey: "facindate",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        進場日期
      </span>
    ),
  },
  {
    accessorKey: "actstart",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        開工日期
      </span>
    ),
  },
  {
    accessorKey: "schedfinish",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        預計完工日期
      </span>
    ),
  },
  {
    accessorKey: "actfinish",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        實際完工日期
      </span>
    ),
  },
  {
    accessorKey: "facoutdate",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        出廠日期
      </span>
    ),
  },
  {
    accessorKey: "infacdays",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        在場天數
      </span>
    ),
  },
  {
    accessorKey: "inwodays",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        施工天數
      </span>
    ),
  },
  {
    accessorKey: "behindordelaydays",
    header: ({ column }) => (
      <span
        className="cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        提前/預期天數
      </span>
    ),
    cell: ({ getValue }) => {
      const value = getValue() as string;
      const numberValue = parseInt(value, 10);
      return (
        <span style={{ color: numberValue > 0 ? "red" : "inherit" }}>
          {value}
        </span>
      );
    },
  },
];