<script>
	let { children } = $props();
</script>

<link rel="stylesheet" href="/global.css" />

<header>
	<a href="/" class="void"><img src="/logo.png" alt="logo" class="logo" /></a>
	<a href="/register" aria-label="Register" class="session">Register</a>
	<a href="/login" aria-label="Log In" class="session">Iniciar Sesión</a>
</header>

{@render children()}

<footer>
	<a href="mailto:coredumped.etsisi@gmail.com" aria-label="Email" class="session">Contacto</a>
</footer>
