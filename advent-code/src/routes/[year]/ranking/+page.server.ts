import type { PageServerLoad } from './$types.ts';
import { API_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

interface Rank{
    usuario_id: number,
    usuario: string,
    correctas: number,
    total_time_difference: number
}

export const load: PageServerLoad = async ({ params }) => {
    const response = await fetch(API_URL + '/ranking/' + params.year + '/');
    if (response.ok) {
        let data: Array<Rank> = await response.json();
        return { data, year:params.year };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }
};