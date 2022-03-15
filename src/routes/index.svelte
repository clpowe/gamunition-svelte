<script>
	import Hero from '../components/Hero.svelte';
	import Feature from '../components/Feature.svelte';
	import Training from '../components/Training.svelte';
	import FirearmServices from '../components/FirearmServices.svelte';

	// export let FeatureSection;
	// export let LiveFireTraing;
	// export let RangeFees;
	// export let InHomeTraining;
	// export let inHomeAddOns;
	// export let PurchaseAndSell;
	// export let WeaponCleaning;
	// export let Testimonials;

	import { fly, fade } from 'svelte/transition';
	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	let name = '';
	let email = '';
	let phone = null;
	let message = '';

	const errMessage = 'All the fields are mandatory';

	const handleSubmit = async (e) => {
		await fetch('https://formspree.io/f/xbjqplpo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					isSuccessVisible = true;
				}
			})
			.catch((error) => {
				let hasError = true;
				console.error(error);
			});
	};
</script>

<div>
	<Hero />

	<Feature />

	<Training />

	<FirearmServices />

	<!-- <section>
		Firearm Services<br />
		Purchase & Selling<br />
		{#each PurchaseAndSell as item (item.id)}
			<div>
				{item.item}<br />
				{item.info}<br />
				{item.price}<br />
			</div>
		{/each}
		<br />
		Weapon Cleaning<br />
		{#each WeaponCleaning as item (item.id)}
			<div>
				{item.item}<br />
				{item.info}<br />
				{item.price}<br />
			</div>
		{/each}
	</section> -->
	<!-- <section>
		Testimonials<br />
		{#each Testimonials as testimonial (testimonial.id)}
			<div>
				{testimonial.name}<br />
				{testimonial.comment}<br />
			</div>
		{/each}
	</section> -->
	<section>
		Booking
		<!-- Calendly inline widget begin -->
		<!-- <div
			title="Booking a training"
			class="calendly-inline-widget border-0 "
			data-url="https://calendly.com/bookinggammunition?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=212121&text_color=ffffff&primary_color=ffeb3b"
			style="min-width:320px;height:1500px;"
		/> -->

		<!-- Calendly inline widget end -->
	</section>
	<!-- <section>
		Contact<br />
		{#if hasError == true}
			<p class="error-alert">{errMessage}</p>
		{:else if isSuccessVisible}
			<p class="error-alert" transition:fade={{ duration: 150 }}>Data updated successfully</p>
		{/if}
		{#if !isSuccessVisible}
			<form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
				<div class="form-group">
					<input
						bind:value={name}
						type="text"
						class="form-control"
						placeholder="Your Name"
						required
					/>
				</div>

				<div class="form-group">
					<input
						bind:value={email}
						type="text"
						class="form-control"
						placeholder="Your Email"
						required
					/>
				</div>
				<div class="form-group">
					<input
						bind:value={phone}
						type="phone"
						class="form-control"
						placeholder="Phone"
						required
					/>
				</div>
				<div class="form-group">
					<textarea bind:value={message} class="form-control" placeholder="Message" required />
				</div>

				<button class="btn btn-full" on:click={() => (submitted = true)}>Continue</button>
			</form>
		{/if}
	</section> -->

	<!-- <script
		type="text/javascript"
		loading="lazy"
		src="https://assets.calendly.com/assets/external/widget.js"
		defer>
	</script> -->
</div>

<style>
	section {
		margin: 100px 0;
	}
</style>
