<script>
	export let training;
</script>

<div
	class="grid grid-cols-1 gap-6 text-center md:(grid-cols-[1fr,2fr] text-left) text-light bg-gun-black p-6 max-w-xl "
>
	<div class="text-center leading-none">
		<p class="text-4xl">${training.price}</p>
		<p class="text-lg mt-4 text-oragne">Per person</p>
	</div>
	<div class="flex flex-col space-y-1">
		<h3 class="text-lg">{training.time}</h3>
		<p class="text-body font-lato">{training.description}</p>
		<p class="font-oswald text-yellow md:place-self-end mt-auto">{training.info}</p>
	</div>
</div>
