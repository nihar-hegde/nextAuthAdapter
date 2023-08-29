// lib/nextauthOptions.ts
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";
import { AuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const nextauthOptions: AuthOptions = {
  // Configure one or more authentication providers
  
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client
          .db(process.env.DB_NAME)
          .collection("users");
        const email = credentials?.email.toLowerCase();
        const user = await usersCollection.findOne({ email });
        if (!user) {
          throw new Error("User does not exist.");
        }

        //validate password
        const passwordIsValid = await bcrypt.compare(
          credentials?.password!,
          user.password
        );

        if (!passwordIsValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user._id.toString(),
          ...user,
        };
      },
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise),
  
};
