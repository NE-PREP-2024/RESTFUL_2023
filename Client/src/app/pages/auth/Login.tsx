import { Button, Input } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <main className="bg-white">
      <div className="py-[15%]">
        <div className="w-1/3 h-auto py-8 flex flex-col gap-y-4 border-[1px] rounded-2xl px-6 mx-auto">
          <div className="text-center text-2xl font-bold">Welcome back!</div>
          <div className="mt-6">
            <Input placeholder="Your Email" size="md" />
          </div>
          <div>
            <Input placeholder="Your Password" type="password" size="md" />
          </div>

          <Button
            variant="filled"
            className="rounded-xl"
            size="md"
            onClick={() => navigate("/dashboard")}
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
