import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <div>Admin page</div>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
    </>
  );
};

export default AdminPage;
