import type { PageServerLoad } from './$types.ts';
import { API_URL } from '$env/static/private';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';

interface Problem{
    respuesta_valida? : boolean,
    problema? : string,
    tiempo_para_debloquear?: string
}

export const load: PageServerLoad = async ({ params, cookies }) => {
    const response = await fetch(API_URL + '/' + params.year + '/' + params.problem + '/', {
        headers:{
            "Authorization": cookies.get('AuthorizationToken') || ""
        }
    });
    if (response.ok) {
        let data: Problem = await response.json();
        return { data };
    }
    else if (response.status == 401){
        throw redirect(303, '/login')
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }
};

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const solucion_propuesta = (data.get("respuesta") as string).toLowerCase().trim();
        const response = await fetch(API_URL + "/" + event.params.year + "/" + event.params.problem + "/", {
            method: 'POST',
            body: JSON.stringify({ solucion_propuesta }),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": event.cookies.get('AuthorizationToken') || ""
            }
        });
        const validation = await response.json();
        if(response.status == 403){
            return fail(response.status, {error: validation.error + "> tiempo restante:" + validation.tiempo_restante })
        }
        else if (response.status != 200) {
            return fail(response.status, { error: validation.error })
        }
        else if (validation.message.includes("incorrecta")){
            return fail(400, {error: validation.message + " > deberás esperar para responder de nuevo"})
        }
        return { success: validation.message }
    },
} satisfies Actions;