import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};
