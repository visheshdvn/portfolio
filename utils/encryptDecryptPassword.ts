import { hash, compare } from "bcrypt";
import { NextApiResponse, NextApiRequest } from "next";

export const hashPassword = () => {
  return async (
    req: NextApiRequest,
    res: NextApiResponse,
    next: () => null
  ) => {
    const hashedPassword = await hash(req.body.password, 12);
    req.body.password = hashedPassword;
    next();
  };
};

export const comparePassword = async (
  plainTextPassword: string,
  hashedPassword: string
) => {
  return await compare(plainTextPassword, hashedPassword);
};
