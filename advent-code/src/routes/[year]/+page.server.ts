import type { PageServerLoad } from './$types.ts';
import { API_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const response = await fetch(API_URL + '/' + params.year + '/');
    if (response.ok) {
        let data: Array<number> = await response.json();
        return { data, year:params.year };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }
};