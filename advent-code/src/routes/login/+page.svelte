<script lang="ts">
	import type { ActionData, PageData } from './$types.ts';
	import { goto } from '$app/navigation';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	$effect(() => {
		console.log(form);
		if (form?.success) {
			goto('/');
		}
	});
</script>

<form class="center" method="POST">
	<input
		type="text"
		name="username"
		id="username"
		class="terminal-input"
		placeholder="email o usuario"
	/>
	<br />
	<input
		type="password"
		name="password"
		id="password"
		class="terminal-input"
		placeholder="contraseña"
	/>
	<br />
	<button class="terminal-button">Log in</button>
	{#if form?.error}
		<div class="error">
			! {form.error}
		</div>
	{/if}
</form>

<style>
	.error {
		color: red;
	}
</style>
