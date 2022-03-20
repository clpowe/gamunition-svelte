<script>
	import Nav from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
	import 'virtual:windi.css';
	import Information from '../components/Information.svelte';
</script>

<div class="relative min-h-screen">
	<Nav />
	<div class="pb-40">
		<slot />
	</div>
	<Information />
	<Footer />
</div>
