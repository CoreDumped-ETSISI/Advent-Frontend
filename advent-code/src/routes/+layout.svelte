<script>
	let { children } = $props();
</script>

<link rel="stylesheet" href="/global.css" />

<header>
	<a href="/" class="void"><img src="/logo.png" alt="logo" class="logo" /></a>

	<a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
</header>

{@render children()}
