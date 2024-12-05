"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FailListItem } from "@/types/type";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<FailListItem>[] = [
  {
    accessorKey: "trains_no",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車次
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "cartype",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車型
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車組車號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "repnum",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />通報號
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_lvl",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />事故等級
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "reptime",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />通報時間
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "rep_loc",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />事故地點
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "tcms_code",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />TCMS故障代碼
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_loc",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />故障位置
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_phenomenon",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />故障現象
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_status",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />狀態
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_dept",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />責任單位
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "fail_cmwo",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />臨維單
        </span>
      </Button>
    ),
    cell: ({ row }) => (
      <a
        href={row.original.cmwo_url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-primary underline"
      >
        {row.original.fail_cmwo}
      </a>
    ),
  },
];