"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      signIn("credentials", { email, password, callbackUrl: "/dashboard" });
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] h-max bg-[--bgSoft] p-5 rounded-lg ">
        {error && (
          <div className="my-4 text-center text-lg">
            An error has occurred.
            <br />
            Please try again later
          </div>
        )}
        <form
          className="flex flex-col items-center justify-center gap-7 formLogin"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-4xl font-bold">Registration</h1>
          <input
            type="text"
            required
            placeholder="Username"
            disabled={creatingUser}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            disabled={creatingUser}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            disabled={creatingUser}
            value={password}
            minLength={5}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={creatingUser} type="submit">
            Registration
          </button>
          <div className="w-full text-center mt-8 text-gray-500 border-t pt-4">
            Existing account?{" "}
            <Link
              className="group hover:text-white transition-settings"
              href={"/login"}
            >
              Login
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                &raquo;
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
