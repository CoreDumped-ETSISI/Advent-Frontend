import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.ts';
import { API_URL } from "$env/static/private";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const valor = data.get("username") as string
        const contraseña = data.get("password") as string;
        const response = await fetch(API_URL + "/login", {
            method: 'POST',
            body: JSON.stringify({ valor, contraseña }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const login = await response.json();
        if (response.status != 200) {
            return fail(response.status, { error: login.error })
        }
        event.cookies.set('AuthorizationToken', `Bearer ${login.token}`,{
            httpOnly: true,
            path:'/',
            secure:true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 72
        }   )
        return { success: "Auth successful" }
    },
} satisfies Actions;