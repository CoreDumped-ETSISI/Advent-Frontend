<script lang="ts">
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
</script>

{@html data.data.problema}
<form method="POST">
	<label class="terminal-input">
		Respuesta &gt;
		<input type="text" name="respuesta" id="respuesta" class="terminal-input" />
	</label>
	<button class="terminal-button">Enviar respuesta</button>
</form>
