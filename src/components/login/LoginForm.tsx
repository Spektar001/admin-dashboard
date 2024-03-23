"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });

    setLoginInProgress(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="w-[450px] h-[450px] flex flex-col items-center justify-center gap-7 bg-[--bgSoft] p-10 rounded-lg formLogin"
      >
        <h1 className="text-4xl font-bold">Login</h1>
        <input
          disabled={loginInProgress}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          disabled={loginInProgress}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
        <div className="w-full text-center mt-8 text-gray-500 border-t pt-4">
          No account?{" "}
          <Link
            className="group hover:text-white transition-settings"
            href={"/registration"}
          >
            Registration
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
              &raquo;
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
