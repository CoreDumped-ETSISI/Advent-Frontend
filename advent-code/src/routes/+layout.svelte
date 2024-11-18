<script>
	let { children } = $props();
</script>

<link rel="stylesheet" href="/global.css" />

<header>
	<img src="/logo.png" alt="logo" class="logo" />

	<a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
</header>

{@render children()}
