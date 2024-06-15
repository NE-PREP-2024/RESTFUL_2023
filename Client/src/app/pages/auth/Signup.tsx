import axios from "@/app/components/api-services/axios.config";
import { Button, Input, Select } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/register", data);
      console.log(response.data);
      if (response.status === 201) {
        toast.success("User created successfully!");
        navigate("/dashboard/employee");
      }
    } catch (error) {
      toast.error("An error occurred!");
      console.log(error);
    }
  };

  return (
    <main className="bg-white">
      <div className="py-[15%]">
        <div className="w-1/3 h-auto py-8 flex flex-col gap-y-4 border-[1px] rounded-2xl px-6 mx-auto">
          <div className="text-center text-2xl font-bold">
            Create Your Account
          </div>

          <div className="mt-2">
            <Input
              placeholder="Your Email"
              size="md"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <Input
              placeholder="Your Password"
              type="password"
              name="password"
              size="md"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <Input
              placeholder="Confirm Your Password"
              type="password"
              name="confirmPassword"
              size="md"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Button
            variant="filled"
            className="rounded-xl"
            size="md"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
          <div>
            <p className="text-center text-sm">
              Already have account ?{" "}
              <Link href="/auth/login">
                <span className="text-[#1B60AC]">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
