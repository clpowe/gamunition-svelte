<script>
	import { onMount } from 'svelte';
	import TestimonyCard from './TestimonyCard.svelte';
	import LoadingSpinner from '$lib/loadingSpinner.svelte';

	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	const handleNextClick = () => {
		carousel.goToNext();
	};
	const handlePrevtClick = () => {
		carousel.goToPrev();
	};

	// @ts-ignore
	import { dev } from '$app/env';

	// @ts-ignore
	const KEY = dev ? import.meta.env.VITE_APIKEY : process.env.VITE_APIKEY;

	const url = `https://api.airtable.com/v0/appq9rVNBW9qLegHl/Testimonials?api_key=${KEY}`;

	const getTestimonials = async () => {
		let array = [];
		try {
			const response = await fetch(url);
			const data = await response.json();
			data.records.forEach((item) => {
				array.push({ ...item.fields, id: item.id });
			});
			return array;
		} catch (error) {
			console.log(error);
		}
	};

	const records = getTestimonials();
</script>

<section class="py-40">
	<div class="mycontainer">
		<div class="flex flex-col gap-6 md:flex-row">
			<div class="">
				<h2 class="text-yellow text-3xl uppercase font-oswald leading-none mb-6">
					What our clients say about us
				</h2>
				<p class="text-light text-body">
					We appreciate and value our clients` opinion greatly. We aspire to perfection by
					sharpening our training skills and improving the training facilities. Your feedback
					matters a lot to us and helps become better.
				</p>
			</div>
			<div class="w-full md:w-1/2 relative my-auto">
				<div class="mask">
					{#await records}
						<LoadingSpinner color="gun-black" />
					{:then section}
						<svelte:component this={Carousel} bind:this={carousel} dots={false} arrows={false}>
							{#each section as Testimony (Testimony.id)}
								<TestimonyCard {Testimony} />
							{/each}
						</svelte:component>
					{:catch error}
						<div>{error.message}</div>
					{/await}
				</div>
				<div class="absolute right-0 bottom-0 flex flex-col ">
					<button
						on:click={handlePrevtClick}
						class="text-light transition-all hover:text-yellow p-2 z-10"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
							<path
								id="Polygon_1"
								data-name="Polygon 1"
								d="M11,0,22,20H0Z"
								transform="translate(0 22) rotate(-90)"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button
						on:click={handleNextClick}
						class="text-light transform rotate-180 transition-all hover:text-yellow p-2"
						><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
							<path
								id="Polygon_2"
								data-name="Polygon 2"
								d="M11,0,22,20H0Z"
								transform="translate(0 22) rotate(-90)"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mask {
		mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 20%,
			rgba(0, 0, 0, 1) 80%,
			rgba(0, 0, 0, 0) 100%
		);
	}
</style>
