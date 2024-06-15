import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import CreateEmployee from "../employees/CreateEmployee";
import EmployeesTable from "../employees/Employees";

function Employee() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Employees</h1>
      <div className="py-6 ">
        <div className="py-4 flex float-right">
          <Button onClick={open}>Create Employee</Button>
        </div>
        <EmployeesTable />
      </div>
      <Modal opened={opened} onClose={close} centered>
        <CreateEmployee />
      </Modal>
    </div>
  );
}

export default Employee;
