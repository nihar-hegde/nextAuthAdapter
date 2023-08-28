import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ServerPage = () => {
  return (
    <>
      <div>ServerPage</div>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
    </>
  );
};

export default ServerPage;
