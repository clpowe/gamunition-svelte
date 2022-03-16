<script>
	import BTN from '$lib/btn.svelte';
</script>

<section
	class="py-40 hero h-[600px] bg-cover sm:(bg-left ) md:(bg-cover) lg:(bg-bottom bg-contain) flex items-center"
>
	<div class="mycontainer text-center md:text-right">
		<div>
			<h1 class="flex justify-center flex-col md:(text-right)">
				<span class="text-light uppercase font-oswald  text-2xl leading-none">Welcome To</span>
				<span class="font-oswald uppercase text-yellow text-2xl leading-none sm:(text-4xl)"
					>Gammunition</span
				>
			</h1>
			<div
				class="flex text-body text-light uppercase space-x-4 justify-center mb-4 md:(justify-end)"
			>
				<p>Knowledge</p>
				<p>Skills</p>
				<p>Attitude</p>
			</div>
			<BTN color="yellow">Book Now</BTN>
		</div>
	</div>
</section>

<style lang="scss">
	.hero {
		background-image: url('https://ik.imagekit.io/cpds/HeroIMG_EUa-0u609.png?ik-sdk-version=javascript-1.4.3&updatedAt=1629691693064');
		background-repeat: no-repeat;
	}

	.btn:hover {
		@apply bg-[#E6D435];
	}
</style>
