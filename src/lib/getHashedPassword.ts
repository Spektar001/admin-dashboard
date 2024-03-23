import bcrypt from "bcrypt";

export const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(String(password), salt);
  return hashedPassword;
}