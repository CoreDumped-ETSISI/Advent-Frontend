import type { PageServerLoad } from './$types.ts';
import { API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
    const years = await fetch(API_URL + '/');
    let data: Array<number> = await years.json();
	return {data};
};