"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {FetcheGetSumStatusListDataInArray }from "@/types/type"

export const columns: ColumnDef<FetcheGetSumStatusListDataInArray>[] = [
  {
    accessorKey: "deptdesc",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />段所
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "carcatalog",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車種
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
    accessorKey: "belongto",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />配置
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "borrowin",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />借入
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "borrowout",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />借出
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "current_cnt",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />現有
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "current_use",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />定期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "current_temp",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />臨時
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "current_ready",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />預備
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "maintain_w",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />保養
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "maintain_sec",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />段修
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "maintain_fac",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />廠修
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "oth_waitrep",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />待料待修
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "oth_return",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />回送
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "oth_stop",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />停用
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "availability",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />可用率
        </span>
      </Button>
    ),
    cell: ({ row }) => (
      <span>{(row.original.availability * 100).toFixed(2)}%</span>
    ),
  },
];