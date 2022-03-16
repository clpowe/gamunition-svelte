<script>
	export let Testimony;
</script>

<div class="text-center space-y-3">
	<div class="h-36 w-36 rounded-1/2 border-[0.5rem] border-yellow overflow-hidden mx-auto">
		<img src={Testimony.img} alt="" class="object-contain object-bottom" />
	</div>
	<p class="font-lato text-light max-w-sm mx-auto ">
		{Testimony.comment}
	</p>
	<h4 class="font-oswald uppercase text-light">{Testimony.name}</h4>
</div>
