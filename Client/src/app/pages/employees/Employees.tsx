import { useAllEmployees } from "@/app/components/api-services/useEmployees";
import DataTable from "@/app/components/data-table";
import { Column } from "@/app/components/data-table/types";
import React, { useState, useEffect } from "react";

const EmployeesTable = () => {
  const [page, setPage] = useState(1);
  const {
    employeeData,
    totalPage,
    totalCount,
    currentPage,
    isLoading,
    isError,
  } = useAllEmployees(page, 4);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

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
      cell: (cellContext) => cellContext.row.data.department?.name,
    },
    {
      key: "laptop",
      header: "Laptop",
      cell: (cellContext) => cellContext.row.data.laptop?.laptopModel,
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <DataTable
        data={employeeData ?? []}
        title={"Employees"}
        columns={columns}
        paginate
        pagination={{
          totalPage: totalPage,
          currentPage: currentPage,
          totalCount: totalCount,
          page: page,
          perPage: 4,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};

export default EmployeesTable;
