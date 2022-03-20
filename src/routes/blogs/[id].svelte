<script>
	export let blog;
	export let body;
</script>

<div class="h-lg bg-center bg-cover" style="background-image: url('{blog.image}')" />

<section class="mycontainer">
	<article
		id="content"
		class="prose mx-auto prose-slate text-light font-lato font-light tracking-wide"
	>
		<div class="text-sm font-lato uppercase mb-3">
			{blog.topic} | {new Date(blog.publishdate).toLocaleDateString('en-gb', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</div>
		<h1 class="text-light title leading-none">{blog.title}</h1>
		<div>
			Written by: {blog.author}
		</div>
		{@html body}
	</article>
</section>

<style>
	.title {
		color: rgb(254, 254, 254);
	}
</style>
