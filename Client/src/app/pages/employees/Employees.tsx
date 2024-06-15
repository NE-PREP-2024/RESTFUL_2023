import axios from "@/app/components/api-services/axios.config";
import { useAllEmployees } from "@/app/components/api-services/useEmployees";
import DataTable from "@/app/components/data-table";
import { Column } from "@/app/components/data-table/types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
const data = [
  { id: 1, name: "John Doe", email: "jo@gmail.com" },
  { id: 2, name: "Jane Doe", email: "jane@gmail.com" },
  { id: 3, name: "John Smith", email: "jsim@gmail.com" },
];
const EmployeesTable = () => {
  const { employeeData } = useAllEmployees();
  console.log("Employees", employeeData);

  const columns: Column<any>[] = [
    {
      key: "names",
      header: "Names",
      cell: (cellContext) =>
        `${cellContext.row.data.firstName} ${cellContext.row.data.lastName}`,
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "telephone",
      header: "Mobile Number",
    },
    {
      key: "nationalId",
      header: "National ID",
    },
    {
      key: "position",
      header: "Position",
    },
    {
      key: "department",
      header: "Department",
    },
    {
      key: "laptop",
      header: "Laptop",
    },
  ];
  return (
    <div>
      <DataTable
        data={employeeData ?? []}
        title={"Employees"}
        columns={columns}
      />
    </div>
  );
};

export default EmployeesTable;
