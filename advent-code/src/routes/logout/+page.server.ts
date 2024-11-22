import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types.js";

export const load: PageServerLoad = async ({ cookies }) => {
    cookies.delete('AuthorizationToken', {path: '/'});
	return {ok:"Log out succesfull"};
};