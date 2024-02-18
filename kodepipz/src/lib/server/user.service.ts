import { db } from "./db";

export const createUser = async (
  user: Omit<User, "id" | "createdAt">
): Promise<User> => {
  const { username, email, firstName, lastName, password } = user;
  return db.user.create({
    data: {
      username,
      email,
      firstName,
      lastName,
      password,
    },
    select: {
      id: true,
      username: true,
      email: true,
      firstName: true,
      lastName: true,
      password: true,
    },
  });
};
