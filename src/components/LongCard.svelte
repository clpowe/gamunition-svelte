<script>
	export let item;
</script>

<div class="bg-light p-3 rounded-lg flex leading-none gap-2 shadow-lg">
	<div class="flex self-center gap-2">
		<p class="uppercase text-lg self-stretch ">{item.item}</p>
		<p class=" text-sm text-light-grey font-lato font-light uppercase  self-end">{item.info}</p>
	</div>
	<p class="ml-auto text-xl ">${item.price}</p>
</div>
