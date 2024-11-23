<script lang="ts">
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
</script>

<div class="center">
	<p class="legend">
		El orden está calculado por número de problemas resueltos y por el tiempo empleado para
		resolverlos
	</p>
	<table>
		<tbody>
			<tr>
				<th>Posición</th>
				<th>Usuario</th>
				<th>Problemas resueltos</th>
			</tr>
			{#each data.data as rank, i}
				<tr>
					<td>{i + 1}</td>
					<td>{rank.usuario}</td>
					<td>{rank.correctas}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	td,
	tr {
		border-bottom: 1px solid;
		border-top: 1px solid;
		padding: 8px;
		text-align: center;
		overflow: hidden;
	}
	table {
		width: 100%;
		padding: 8px;
		border-collapse: collapse;
	}
	.center {
		margin: 8px;
	}
	.legend {
		padding-bottom: 8px;
	}
</style>
