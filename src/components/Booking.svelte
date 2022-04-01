<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let calendly = document.createElement('script');
		calendly.src = 'https://assets.calendly.com/assets/external/widget.js';
		calendly.type = 'text/javascript';

		document.body.appendChild(calendly);
	});
</script>

<section class="py-30 " id="booking">
	<div class="mycontainer text-center">
		<h2 class="text-3xl text-yellow uppercase font-oswald leading-none mb-6">Booking</h2>
		<!-- Calendly inline widget begin -->
		<div
			title="Booking a training"
			class="calendly-inline-widget border-0 h-[1600px]  md:h-[1280px]"
			data-url="https://calendly.com/bookinggammunition?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=212121&text_color=ffffff&primary_color=ffeb3b"
			style="min-width:320px;"
		/>

		<!-- <script
			type="text/javascript"
			src="https://assets.calendly.com/assets/external/widget.js"></script> -->
		<!-- Calendly inline widget end -->
	</div>
</section>
