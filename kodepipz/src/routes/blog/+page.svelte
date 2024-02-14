<script>
	export let data;
</script>
<br>
<br>
<br>
<div class="container">
	<h1>Blog <img src="/src/blogicon.png" alt="" height="40"></h1>
<br>
<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

</div>