"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const ServerPage = () => {
  return (
    <>
      <div>ServerPage</div>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
      <Button onClick={() => signOut()} variant={"destructive"}>
        Log out
      </Button>
    </>
  );
};

export default ServerPage;
