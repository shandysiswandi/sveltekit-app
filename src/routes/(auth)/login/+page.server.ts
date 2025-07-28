import type { Actions, PageServerLoad } from "./$types.js";
import { message, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { redirect } from "@sveltejs/kit";
import { userService } from "$lib/server/usecase/user";
import { AuthenticationError, NotFoundError } from "$lib/server/errors";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return message(form, 'Invalid data, please check the form.', { status: 400 });
    }

    try {
      const user = await userService.login(form.data.email, form.data.password);
      console.log("USER", user);
      // Create and set the session cookie
    } catch (error) {
      if (error instanceof NotFoundError || error instanceof AuthenticationError) {
        return message(form, 'Invalid email or password.', { status: 401 });
      }

      return message(form, 'An internal server error occurred.', { status: 500 });
    }

    throw redirect(303, '/dashboard');
  },
};
