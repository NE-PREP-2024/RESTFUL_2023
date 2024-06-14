import React from "react";
import TestTable from "./test-table";

function Dashboard() {
  const title = "Test Dashboard";
  return (
    <div className="w-full py-4 px-8">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="py-6">
        <TestTable />
      </div>
    </div>
  );
}

export default Dashboard;
