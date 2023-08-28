import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ClientPage = () => {
  return (
    <>
      <div>ClientPage</div>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
    </>
  );
};

export default ClientPage;
