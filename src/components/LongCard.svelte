<script>
	export let item;
</script>

<div class="bg-white p-3 rounded-lg flex leading-none ">
	<div class="flex self-center">
		<p class="uppercase text-lg self-stretch ">{item.item}</p>
		<p class=" text-sm text-light-grey font-lato font-light uppercase  self-end">{item.info}</p>
	</div>
	<p class="ml-auto text-xl ">${item.price}</p>
</div>
