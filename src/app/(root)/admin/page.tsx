"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <div>Admin page</div>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
      <Button onClick={() => signOut()} variant={"destructive"}>
        Log out
      </Button>
    </>
  );
};

export default AdminPage;
