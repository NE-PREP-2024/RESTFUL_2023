import axios from "@/app/components/api-services/axios.config";
import { Button, Input } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/login", data);
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      if (response.status === 200) {
        toast.success("User logged in successfully!");
        navigate("/dashboard/employee");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
      navigate("/auth/login");
    }
  };
  return (
    <main className="bg-white">
      <div className="py-[15%]">
        <div className="w-1/3 h-auto py-8 flex flex-col gap-y-4 border-[1px] rounded-2xl px-6 mx-auto">
          <div className="text-center text-2xl font-bold">Welcome back!</div>
          <div className="mt-6">
            <Input
              placeholder="Your Email"
              size="md"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              placeholder="Your Password"
              type="password"
              size="md"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <Button
            variant="filled"
            className="rounded-xl"
            size="md"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div>
            <p className="text-center text-sm">
              Don't have an account ?{" "}
              <Link href="/auth/register">
                <span className="text-[#1B60AC]">Create account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
