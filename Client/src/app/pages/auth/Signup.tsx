import { Button, Input, Select } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <main className="bg-white">
      <div className="py-[4%]">
        <div className="w-1/3 h-auto py-8 flex flex-col gap-y-4 border-[1px] rounded-2xl px-6 mx-auto">
          <div className="text-center text-2xl font-bold">
            Create Your Account
          </div>
          <div className="mt-6">
            <Input placeholder="Your First name" size="md" />
          </div>
          <div className="mt-2">
            <Input placeholder="Your Last name" size="md" />
          </div>
          <div className="mt-2">
            <Input placeholder="Your Email" size="md" type="email" />
          </div>
          <div className="mt-2">
            <Input placeholder="Your National ID" size="md" type="number" />
          </div>
          <div className="mt-2">
            <Input placeholder="Your Phone number" size="md" />
          </div>
          <div className="mt-2">
            <Input placeholder="Your Password" type="password" size="md" />
          </div>
          <div className="mt-2">
            <Select
              placeholder="Position"
              data={["Admin", "Employee", "User", "Seller"]}
            />
          </div>
          <div className="mt-2">
            <Select
              placeholder="Department"
              data={["Stock", "Engineering", "Head", "Other"]}
            />
          </div>
          <div className="mt-2">
            <Select
              placeholder="Laptop"
              data={["Hp", "MacBook", "Lonovo", "Microsoft", "Sumsang"]}
            />
          </div>
          <Button variant="filled" className="rounded-xl" size="md">
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
