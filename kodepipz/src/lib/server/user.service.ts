import { db } from "./db";

/**
 * @function
 * Retrieve all users from the database
 * @returns
 * user object
 */
export const getAllUsers = async () => {
  return db.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      firstName: true,
      lastName: true,
      password: true,
      profile: true,
    },
  });
};

/**
 * @function
 * Create a new user in the database
 */
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
