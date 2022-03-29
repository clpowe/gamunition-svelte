<script>
	import Hero from '../components/Hero.svelte';
	import Feature from '../components/Feature.svelte';
	import Training from '../components/Training.svelte';
	import FirearmServices from '../components/FirearmServices.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Booking from '../components/Booking.svelte';
	import Contact from '../components/Contact.svelte';
</script>

<svelte:head>
	<title>Gammunition Arms and Training</title>
	<meta
		name="description"
		content="Are You A First Time Shooter or New Firearm Owner? However You've Arrive Here, You're Ready. Allow A Certified NRA Instructor To Transfer The Knowledge, Skills and Attitude You Need To Be A Responsible Firearm Operator."
	/>
</svelte:head>

<div>
	<Hero />

	<Feature />

	<Training />

	<FirearmServices />

	<Testimonials />

	<Booking />

	<Contact />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
