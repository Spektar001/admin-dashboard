"use client";

import { signIn } from "next-auth/react";
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          disabled={loginInProgress}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
