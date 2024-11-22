import type { PageServerLoad } from './$types.ts';
import { API_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

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
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }
};