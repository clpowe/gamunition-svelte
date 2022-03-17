<script>
	export let item;
</script>

<div class="bg-light p-3 rounded-lg flex leading-none gap-2 shadow-lg text-left">
	<div class="flex flex-col md:flex-row self-center gap-2">
		<p class="uppercase text-lg self-stretch ">{item.item}</p>
		<p class=" md:text-sm text-light-grey font-lato font-light uppercase  md:self-end">
			{item.info}
		</p>
	</div>
	<p class="ml-auto text-xl ">${item.price}</p>
</div>
