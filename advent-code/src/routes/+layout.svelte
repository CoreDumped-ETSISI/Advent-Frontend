<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData, PageData } from './$types.ts';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let userid = $state('');
	$effect(() => {
		if (data.token) {
			userid = atob(data.token.split('.')[1]);
		}
	});
</script>

<svelte:head>
	<title>Adviento Core Dumped</title>
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

<header>
	<a href="/" class="void"><img src="/logo.png" alt="logo" class="logo" /></a>
	{#if !data.token}
		<a href="/register" aria-label="Register" class="session">Register</a>
		<a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
	{:else}
		<a href="/logout" aria-label="Log Out" class="session">Cerrar Sesión {userid}</a>
	{/if}
</header>

{@render children()}

<footer>
	<a href="mailto:coredumped.etsisi@gmail.com" aria-label="Email" class="session">Contacto</a>
</footer>
