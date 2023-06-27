import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "@/utils/encryptDecryptPassword";
import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();

const secret = process.env.TOKEN_SECRET;

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  secret: secret,
  jwt: {
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      authorize: async (credentials, req) => {
        const user_found = await prisma.user.findUnique({
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            email: true,
            password: true,
          },
          where: {
            username: credentials?.username,
          },
        });

        if (!user_found) {
          return null;
        }

        const match = await comparePassword(
          credentials?.password as string,
          user_found.password
        );

        if (!match) {
          return null;
        }
        await prisma.$disconnect();

        return {
          id: user_found.id,
          firstname: user_found.firstname,
          lastname: user_found.lastname,
          username: user_found.username,
          email: user_found.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.username = user.username;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.userId,
        email: token.email,
        username: token.username,
        firstname: token.firstname,
        lastname: token.lastname,
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
