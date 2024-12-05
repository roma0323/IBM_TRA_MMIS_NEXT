"use client";

import { ColumnDef } from "@tanstack/react-table";
import { InventoryListBalance,InventoryListIssue } from "@/types/type";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columnInventoryListIssue: ColumnDef<InventoryListBalance | InventoryListIssue>[] = [
  {
    accessorKey: "dept",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />廠段
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "itemnum",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />料號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "itemdesc",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />材料名稱
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "conditioncode",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />料性
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "unitprice",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />單價
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />數量
        </span>
      </Button>
    ),
   
  },
  {
    accessorKey: "unit",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />材料單位
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "sum_issue_mount",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />金額
        </span>
      </Button>
    ),
   
  },
  {
    accessorKey: "percentage",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />金額占比
        </span>
      </Button>
    ),
    cell: ({ row }) => {
      const percentage = (row.original as InventoryListBalance & { percentage: number }).percentage.toFixed(2);
      return <span>{percentage}%</span>;
    },
  },
  
  
 
  
];