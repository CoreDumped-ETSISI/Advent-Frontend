<script lang="ts">
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
</script>

<p>Selecciona un problema en el tronco del árbol:</p>
<div class="tree">
	<pre>
             /\
            &lt;  &gt;
             \/
             /\
            /  \
           /++++\
          /  ()  \
          /      \
         /~`~`~`~`\
        /  ()  ()  \
        /           \
       /*&*&*&*&*&*&\
      /  ()  ()  ()  \
      /              \
     /++++++++++++++++\
    /  ()  ()  ()  ()  \
    /                  \
   /~`~`~`~`~`~`~`~`~`~`\
  /  ()  ()  ()  ()  ()  \
  /*&*&*&*&*&*&*&*&*&*&*&\
 /                        \
/,.,.,.,.,.,.,.,.,.,.,.,.,.\
</pre>
	<a href="/{data.year}/ranking" class="problem-select">[Clasificación]</a>
	|&nbsp;&nbsp;&nbsp;&nbsp;|
	{#each data.data as problem}
		<a href="/{data.year}/{problem}" class="problem-select"
			>[ {problem.toString().padStart(2, '0')} ]</a
		>|&nbsp;&nbsp;&nbsp;&nbsp;|
	{/each}
</div>

<style>
	* {
		font-family: monospace;
	}
	p {
		margin: 8px;
	}
	.tree {
		padding-top: 8px;
		font-family: monospace;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.problem-select {
		margin-top: 0;
		padding: 0;
	}
</style>
