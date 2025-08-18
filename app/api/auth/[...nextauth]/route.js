import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/users";
import connectDB from "@/db/connectDB";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, session, credentials }) {
      if (account && account.provider === 'github') {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username:user.name.replace(/\s+/g, '').toLowerCase(),
          });
          await newUser.save();
          user.id = currentUser.username;        }

      }
       return true;
    },
    async session({ session, user, token }) {
      const dbuser = await User.findOne({ email: session.user.email });
      session.user.id = dbuser.username;
      return session;
    }
  },  
});



export { handler as GET, handler as POST };
