<script>
	export let blog;
	export let body;
</script>

<h1>{blog.title}</h1>

<article id="content" class="prose mx-auto prose-slate">
	{@html body}
</article>
