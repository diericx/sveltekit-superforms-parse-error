import type { Handle } from '@sveltejs/kit';
import { BROWSER, DEV } from 'esm-env';

export const handle = (async ({ event, resolve }) => {
	// Mocking a body size error which was how I noticed this.
	// Remove this to restore functionality.
	if (event.request.method == 'POST') {
		return new Response('Body limit response', { status: 413 });
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
