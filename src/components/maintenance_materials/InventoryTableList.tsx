import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { InventoryListBalance, InventoryListIssue } from "@/types/type";
import Loading2 from "@/components/Loading2";

type InventoryTableListProps = {
  data: (InventoryListBalance | InventoryListIssue)[];
  isLoading: boolean;
  totalMoney: number; // New prop for total money
};

// Define a type for the table meta
type TableMeta = {
  totalMoney: number;
};

// Define your columns using react-table's ColumnDef
const columns: ColumnDef<InventoryListBalance | InventoryListIssue>[] = [
  {
    accessorKey: "dept",
    header: "廠段",
  },
  {
    accessorKey: "itemnum",
    header: "料號",
  },
  {
    accessorKey: "itemdesc",
    header: "材料名稱",
  },
  {
    accessorKey: "conditioncode",
    header: "料性",
  },
  {
    accessorKey: "unitprice",
    header: "單價",
  },
  {
    id: "quantity",
    header: "數量",
    cell: ({ row }) =>
      "curbal" in row.original
        ? (row.original as InventoryListBalance).curbal
        : (row.original as InventoryListIssue).quantity,
  },
  {
    accessorKey: "unit",
    header: "材料單位",
  },
  {
    id: "sum_mount",
    header: "金額",
    cell: ({ row }) =>
      "sum_invbal_mount" in row.original
        ? (row.original as InventoryListBalance).sum_invbal_mount
        : (row.original as InventoryListIssue).sum_issue_mount,
  },
  {
    //FIXME: error in 庫存餘額 全部機物處,全部機場,全部機務段
    id: "percentage",
    header: "金額占比",
    cell: ({ row, table }) => {
      const totalMoney = (table.options.meta as TableMeta).totalMoney;
      const sumMount = "sum_invbal_mount" in row.original
        ? parseFloat((row.original as InventoryListBalance).sum_invbal_mount)
        : parseFloat((row.original as InventoryListIssue).sum_issue_mount);
      const percentage = ((sumMount / totalMoney) * 100).toFixed(2);
      return `${percentage}%`;
    },
  },
];

const InventoryTableList: React.FC<InventoryTableListProps> = ({
  data,
  isLoading,
  totalMoney,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    meta: {
      totalMoney, // Pass totalMoney to table meta
    },
  });

  return (
    < >
      <Table>
        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} >
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {isLoading ? (
          <Loading2 />
        ) : (
          <>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    無資料
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </>
        )}
      </Table>
      <div className="rounded-lg bottom-6 flex items-center justify-end space-x-2 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default InventoryTableList;