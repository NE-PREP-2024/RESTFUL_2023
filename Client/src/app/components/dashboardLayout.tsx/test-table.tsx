import React from "react";
import { Column } from "../data-table/types";
import DataTable from "../data-table";

const data = [
  { id: 1, name: "John Doe", email: "jo@gmail.com" },
  { id: 2, name: "Jane Doe", email: "jane@gmail.com" },
  { id: 3, name: "John Smith", email: "jsim@gmail.com" },
];

const TestTable = () => {
  const columns: Column<(typeof data)[0]>[] = [
    { key: "id", header: "ID" },
    {
      key: "name",
      header: "Name",
      cell: (cellContext) => (
        <div>{cellContext.row.data.email + cellContext.value}</div>
      ),
    },
    { key: "email", header: "Email" },
  ];
  return (
    <div>
      <DataTable data={data} title={"Users"} columns={columns} />
    </div>
  );
};

export default TestTable;
