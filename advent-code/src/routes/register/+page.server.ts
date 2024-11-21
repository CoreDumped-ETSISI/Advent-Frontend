import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.ts';
import { API_URL } from "$env/static/private";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const usuario = data.get("username") as string
        const correo = data.get("email") as string
        const contraseña = data.get("password") as string;
        const response = await fetch(API_URL + "/register", {
            method: 'POST',
            body: JSON.stringify({ correo, usuario, contraseña }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const login = await response.json();
        if (response.status != 200) {
            return fail(response.status, { error: login.error })
        }
        return { success: "Register successful" }
    },
} satisfies Actions;