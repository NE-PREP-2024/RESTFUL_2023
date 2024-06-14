import TestTable from "@/app/components/dashboardLayout.tsx/test-table";
import React from "react";

function Employee() {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Employees</h1>
      <div className="py-6 ">
        <TestTable />
      </div>
    </div>
  );
}

export default Employee;
