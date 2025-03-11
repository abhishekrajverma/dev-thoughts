"use client";
import { SignUpForm } from "@/components/signup-form";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
  }


  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignUpForm 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}