import { AuthOptions } from "next-auth";
import { User } from "@/models/User";
import mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        name: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password!;

        mongoose.connect(process.env.MONGO_URI!);

        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compare(password, user.password);

        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
};
