import clientPromise from "@/lib/mongodb";
import { formSchema } from "@/lib/validators/userValidator";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = formSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: "Validation error.", errors: validationResult.error },
        { status: 400 }
      );
    }

    const data = validationResult.data as {
      email: string;
      password: string;
      role: "admin" | "user";
    };
    //!Test

    const client = await clientPromise;
    const users = client.db(process.env.DB_NAME).collection("users");

    const password = bcrypt.hashSync(data.password, 10);
    await users.insertOne({
      email: data.email,
      password: password,
      role: data.role,
    });

    //*Test end
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("There is an error", error);
  }
}
