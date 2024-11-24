import type { LayoutServerLoad,Actions } from './$types.ts';
 
export const load = (async ({ cookies }) => {
  const token = cookies.get('AuthorizationToken');
  return {
    token
  };
}) satisfies LayoutServerLoad;