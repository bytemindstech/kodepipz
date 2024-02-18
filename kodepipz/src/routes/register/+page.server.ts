import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import * as UserService from "$lib/server/user.service";
import bcrypt from "bcrypt";

export const actions: Actions = {
  registerUser: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { username, email, firstName, lastName, password } = formData as {
      [key: string]: string;
    };

    //validation logic for incoming data before creating the user

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      };
      await UserService.createUser(newUser);
    } catch (error) {
      console.log(error);
      return fail(500, { message: "User registration failed" });
    }

    return {
      status: 201,
    };
  },
};
