<script lang="ts">
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
</script>

<p>Selecciona un año en el tronco del árbol:</p>
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
           |    |
</pre>
	{#each data.data as year}
		<a href="/{year}" class="problem-select">[{year}]</a>|&nbsp;&nbsp;&nbsp;&nbsp;|
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
