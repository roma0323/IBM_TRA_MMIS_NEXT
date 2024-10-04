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
import Loading from "@/components/Loading";

type InventoryTableListProps = {
  data: (InventoryListBalance | InventoryListIssue)[];
  isLoading: boolean; // New prop for loading state
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
    id: "percentage",
    header: "金額占比",
    cell: () => "??%", // Replace with actual percentage calculation
  },
];

const InventoryTableList: React.FC<InventoryTableListProps> = ({
  data,
  isLoading,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 15, // Number of items per page
      },
    },
  });

  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-slate-100 rounded-lg">
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
          <div className="text-xl">
            <span>Loading...</span>
          </div>
        ) : (
          <>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
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
                    
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </>
        )}
      </Table>
      {/* Pagination Controls */}
      <div className="bg-slate-100 fixed rounded-lg bottom-6 flex items-center justify-end space-x-2 p-4">
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
    </div>
  );
};

export default InventoryTableList;
