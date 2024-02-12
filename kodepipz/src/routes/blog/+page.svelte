<script>
	export let data;
</script>
<br>
<div class="container">
	<h1>Blog</h1>
<br>
<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

</div>