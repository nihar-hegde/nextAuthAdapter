
import * as z from "zod"


const RoleEnum = z.enum(["admin", "user"]);
export const formSchema = z.object({
  email: z.string().email(),
  password:z.string().min(5,{message:"Min 5 Chars"}),
  role: RoleEnum,
})
