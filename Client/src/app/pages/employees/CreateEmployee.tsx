import axios, { api } from "@/app/components/api-services/axios.config";
import { Button, Input, Select } from "@mantine/core";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

function CreateEmployee() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationalId: "",
    telephone: "",
    position: "",
    department: "",
    laptopModel: "",
    laptopManufacturer: "",
    serialNumber: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/employees", data);
      console.log(response.data);
      if (response.status === 201) {
        toast.success("Employee created successfully!");
        mutate;
      }
    } catch (error) {
      toast.error("An error occurred!");
      console.log(error);
    }
  };
  return (
    <main className="bg-white">
      <div className="">
        <div className="w-full h-auto flex flex-col gap-y-4 rounded-2xl px-6 mx-auto">
          <div className="text-center text-2xl font-bold">
            Create Your Account
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="">
              <Input
                placeholder="Your First name"
                size="md"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Input
                placeholder="Your Last name"
                size="md"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="">
              <Input
                placeholder="Your Email"
                size="md"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Input
                placeholder="Your National ID"
                size="md"
                type="number"
                name="nationalId"
                value={data.nationalId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="">
              <Input
                placeholder="Your Phone number"
                size="md"
                name="telephone"
                value={data.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Select
                placeholder="Position"
                data={["Admin", "Employee", "User", "Seller"]}
                value={data.position}
                onChange={(value: any) => handleSelectChange("position", value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="">
              <Select
                placeholder="Department"
                data={["Stock", "Engineering", "Head", "Other"]}
                value={data.department}
                onChange={(value: any) =>
                  handleSelectChange("department", value)
                }
              />
            </div>
            <div className="">
              <Input
                placeholder="Serial Number"
                type="text"
                size="md"
                name="serialNumber"
                value={data.serialNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="mt-2">
              <Select
                placeholder="Laptop"
                data={["Hp", "MacBook", "Lonovo", "Microsoft", "Sumsang"]}
                value={data.laptopModel}
                onChange={(value: any) =>
                  handleSelectChange("laptopModel", value)
                }
              />
            </div>
            <div>
              <Select
                placeholder="Manufacturer"
                data={["Hp", "MacBook", "Lonovo", "Microsoft", "Sumsang"]}
                value={data.laptopManufacturer}
                onChange={(value: any) =>
                  handleSelectChange("laptopManufacturer", value)
                }
              />
            </div>
          </div>
          <Button
            variant="filled"
            className="rounded-xl"
            size="md"
            onClick={handleSubmit}
          >
            Create Employee
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CreateEmployee;
