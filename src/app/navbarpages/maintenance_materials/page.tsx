import ClientPage from "@/components/maintenance_materials/ClientPage";
import React from "react";
import { getInvMount, getInvMountList, getInvMountListIssue } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  let [inventory_overview, inventory_list_balance, inventory_list_issue] = await Promise.all([
    getInvMount(date),
    getInvMountList(date),
    getInvMountListIssue(date),
  ]);

  // Mock data for testing
  inventory_overview = [{
    "dept": "WAY00",
    "month": "1",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "MGY00",
    "month": "2",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },{
    "dept": "WAY00",
    "month": "3",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "WAY00",
    "month": "4",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },{
    "dept": "MGY00",
    "month": "5",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "WAY00",
    "month": "6",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },{
    "dept": "WAY00",
    "month": "7",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "WAY00",
    "month": "8",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },{
    "dept": "WAY00",
    "month": "9",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "WAY00",
    "month": "10",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },{
    "dept": "WAY00",
    "month": "11",
    "year": "2024",
    "sum_issue_mount": "54789464.8000",
    "sum_invbal_mount": "1344924283.5500"
  }, {
    "dept": "WAY00",
    "month": "12",
    "year": "2024",
    "sum_issue_mount": "29145173.7900",
    "sum_invbal_mount": "1299152818.2700"
  },];

  inventory_list_balance = [{
    "itemnum": "1924671900",
    "conditioncode": "3",
    "unitprice": "25238.00",
    "dept": "MGY00",
    "month": "1",
    "year": "2024",
    "unit": "PC",
    "itemdesc": "GTO閘流體(含引線及接頭)",
    "sum_invbal_mount": "4643792.0000",
    "curbal": "184.00"
  }, {
    "itemnum": "1924671900",
    "conditioncode": "1",
    "unitprice": "25238.00",
    "dept": "MGY00",
    "month": "1",
    "year": "2024",
    "unit": "PC",
    "itemdesc": "GTO閘流體(含引線及接頭)",
    "sum_invbal_mount": "3634272.0000",
    "curbal": "144.00"
  }];

  inventory_list_issue = [{
    "itemnum": "0001030105",
    "conditioncode": "1",
    "unitprice": "21.35",
    "dept": "MGY00",
    "month": "1",
    "year": "2024",
    "unit": "LT",
    "itemdesc": "柴油",
    "sum_issue_mount": "2739333.1000",
    "quantity": "128306.00"
  }, {
    "itemnum": "19EMEM0220",
    "conditioncode": "1",
    "unitprice": "756.00",
    "dept": "MGY00",
    "month": "1",
    "year": "2024",
    "unit": "PC",
    "itemdesc": "PP機車合成閘瓦",
    "sum_issue_mount": "290304.0000",
    "quantity": "384.00"
  }];

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
        inventory_overview={inventory_overview}
        inventory_list_balance={inventory_list_balance}
        inventory_list_issue={inventory_list_issue}
      />
    </main>
  );
}