<script lang="ts">
	import type { PageData } from './$types.ts';

	let { data }: { data: PageData } = $props();
</script>

<p>
	El Calendario de Adviento de Core Dumped es una competición navideña de informática. Pondrás a
	prueba todas las habilidades que has aprendido en la escuela. Cada día lectivo de diciembre se
	desbloqueará un nuevo problema a resolver. ¡Atrevete, crea una cuenta y ve a por el top del
	ranking anual, puede que te lleves algún premio! (No hagas trampas y uses IA que nos ponemos
	tristes :C )
</p>
<p>Selecciona un año en el tronco del árbol:</p>
<div class="tree">
	<pre class="pre-tree">
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
