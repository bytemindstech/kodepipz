<script>
	export let data;
</script>
<br>
<div class="container">
	<img src="/blogicon.png" alt="" height="60">
<br>
<br>
<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

</div>