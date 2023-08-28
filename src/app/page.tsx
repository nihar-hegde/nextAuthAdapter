import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home
      <div className="flex">
        <Link
          href={"/register"}
          className={buttonVariants({ variant: "default" })}
        >
          Register
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          href={"/admin"}
          className={buttonVariants({ variant: "default" })}
        >
          Admin
        </Link>
        <Link
          href={"/client"}
          className={buttonVariants({ variant: "default" })}
        >
          Client
        </Link>
        <Link
          href={"/server"}
          className={buttonVariants({ variant: "default" })}
        >
          Server
        </Link>
      </div>
    </main>
  );
}
