"use client";

import { ColumnDef } from "@tanstack/react-table";
import { factorySumStatus } from "@/types/type";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";



export const columns: ColumnDef<factorySumStatus>[] = [
  {
    accessorKey: "assetnum",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "imnum",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />進場收容單號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "worktype",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />檢修級別
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "wojp3",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />工作單號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "facoutdate",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />交段日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "childcarcnt",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車輛數
        </span>
      </Button>
    ),
  },
  
  
];