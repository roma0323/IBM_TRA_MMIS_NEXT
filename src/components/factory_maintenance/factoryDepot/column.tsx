"use client";

import { ColumnDef } from "@tanstack/react-table";
import { factorySumStatus } from "@/types/type";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";



export const columns: ColumnDef<factorySumStatus>[] = [
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
    accessorKey: "deptdesc",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />廠別
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
    accessorKey: "assetnum",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />車組/車號
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
    accessorKey: "facindate",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />進場日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "actstart",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />開工日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "schedfinish",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />預計完工日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "actfinish",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />實際完工日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "facoutdate",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />出廠日期
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "infacdays",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />在場天數
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "inwodays",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />施工天數
        </span>
      </Button>
    ),
  },
  {
    accessorKey: "behindordelaydays",
    header: ({ column }) => (
      <Button size="label" variant="ghost">
        <span onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown />提前/預期天數
        </span>
      </Button>
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