<script>
	let { children } = $props();
</script>

<header>
    <img src="/logo.png" alt="logo" class="logo">

    <a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
</header>

<link rel="stylesheet" href="/global.css" />

{@render children()}
