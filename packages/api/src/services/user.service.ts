import User from "../models/User.model";
import { CreateUserInput } from "../types/user.types";

export async function createUser(input: CreateUserInput) {
  // const hashedPassword = await hashPassword(input.password);
  // const user = await User.create({ ...input, password: hashedPassword });
}
