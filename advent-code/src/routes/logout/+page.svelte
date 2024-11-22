<script lang="ts">
	import type { ActionData, PageData } from './$types.ts';
	import { goto, invalidateAll } from '$app/navigation';

	let { data }: { data: PageData } = $props();
	$effect(() => {
		if (data?.ok) {
			goto('/', { invalidateAll: true });
		}
	});
</script>
