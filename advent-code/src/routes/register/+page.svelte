<script lang="ts">
	import type { ActionData, PageData } from './$types.ts';
	import { goto } from '$app/navigation';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	$effect(() => {
		console.log(form);
		if (form?.success) {
			goto('/login');
		}
	});
</script>

<form method="POST" class="center">
	<input type="text" name="email" id="email" class="terminal-input" placeholder="email o usuario" />
	<br />
	<input
		type="text"
		name="username"
		id="username"
		class="terminal-input"
		placeholder="Nombre de usuario"
	/>
	<br />
	<input
		type="text"
		name="password"
		id="password"
		class="terminal-input"
		placeholder="contraseña"
	/>
	<br />
	<button class="terminal-button">Register</button>
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
