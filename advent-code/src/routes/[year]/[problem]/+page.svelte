<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData, ActionData } from './$types.ts';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

{#if !data.data.tiempo_para_desbloquear}
	<div class="problem">
		{@html data.data.problema}
	</div>

	<form method="POST">
		{#if !data.data.respuesta_valida}
			<label class="terminal-input">
				Respuesta &gt;
				<input type="text" name="respuesta" id="respuesta" class="terminal-input" />
			</label>
			<button class="terminal-button">Enviar respuesta</button>
			{#if form?.error}
				<div class="error">
					! {form.error}
				</div>
			{/if}
		{:else}
			<p class="error">Problema completado!</p>
		{/if}
	</form>
{:else}
	<div class="problem">
		<h3>Tiempo para desbloquear: {data.data.tiempo_para_desbloquear.split('m')[0]}min</h3>
	</div>
{/if}

<style>
	.problem {
		padding: 8px;
	}
	.error {
		color: var(--orange);
		padding: 8px;
	}
</style>
