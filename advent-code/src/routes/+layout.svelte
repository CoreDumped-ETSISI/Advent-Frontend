<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData, PageData } from './$types.ts';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<head>
	<title>Adviento Core Dumped</title>
</head>
<link rel="stylesheet" href="/global.css" />

<header>
	<a href="/" class="void"><img src="/logo.png" alt="logo" class="logo" /></a>
	{#if !data.token}
		<a href="/register" aria-label="Register" class="session">Register</a>
		<a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
	{:else}
		<a href="/logout" aria-label="Log Out" class="session">Cerrar Sesión</a>
	{/if}
</header>

{@render children()}

<footer>
	<a href="mailto:coredumped.etsisi@gmail.com" aria-label="Email" class="session">Contacto</a>
</footer>
