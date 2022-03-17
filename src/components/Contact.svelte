<script>
	import Btn from '$lib/btn.svelte';
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

<section class="py-40">
	<div class="mycontainer text-center">
		<h2 class="text-yellow text-3xl uppercase font-oswald ">Contact</h2>
		<p class="font-lato text-oragne font-light text-lg mb-6">
			Send a direct message to Terrence A. Gammage
		</p>
		{#if hasError == true}
			<p class="error-alert">{errMessage}</p>
		{:else if isSuccessVisible}
			<div class="error-alert" transition:fly={{ duration: 150 }}>
				<div
					class="my-20 h-20 w-80 text-center bg-oragne font-oswald uppercase rounded-lg grid place-content-center leadiing-none text-lg mx-auto"
				>
					THANKS I will be in touch
				</div>
			</div>
		{/if}
		{#if !isSuccessVisible}
			<form
				id="surveyForm"
				class="mt-4 max-w-lg mx-auto space-y-4 text-left"
				class:submitted
				on:submit|preventDefault={handleSubmit}
			>
				<div class="form-group">
					<label for="name" class="font-oswald uppercase text-light-grey ">Your Name</label>
					<input
						bind:value={name}
						type="text"
						name="name"
						class="form-control w-full h-12 p-4 ring-yellow"
						placeholder="Your Name"
						required
					/>
				</div>

				<div class="form-group">
					<label for="email" class="font-oswald uppercase text-light-grey ">Your Email</label>
					<input
						bind:value={email}
						name="email"
						type="text"
						class="form-control w-full h-12 p-4"
						placeholder="Your Email"
						required
					/>
				</div>
				<div class="form-group">
					<label for="phone" class="font-oswald uppercase text-light-grey ">Your Phone</label>
					<input
						bind:value={phone}
						name="phone"
						type="phone"
						class="form-control w-full h-12 p-4"
						placeholder="Phone"
						required
					/>
				</div>
				<div class="form-group">
					<label for="message" class="font-oswald uppercase text-light-grey ">Message</label>
					<textarea
						bind:value={message}
						name="message"
						class="form-control w-full p-4"
						placeholder="Message"
						required
					/>
				</div>
				<div class="text-center">
					<Btn color="yellow" buttonAction={handleSubmit}>Send Message</Btn>
				</div>
			</form>
		{/if}
	</div>
</section>

<style>
	input:focus {
		outline: none !important;
		border: 4px solid #ffeb3b;
	}

	textarea:focus {
		outline: none !important;
		border: 4px solid #ffeb3b;
	}
</style>
