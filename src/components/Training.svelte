<script>
	import TrainingList from './Training/TrainingList.svelte';
	import ItemList from './Training/ItemList.svelte';
	import BTN from '$lib/btn.svelte';
</script>

<section class="py-40 font-oswald ">
	<div class="mycontainer text-center">
		<h2 class="text-yellow text-3xl uppercase">Training</h2>
		<h3 class="text-white uppercase text-xl">At the range (LIVE FIRE)</h3>
		<TrainingList base="LiveFireTraining" />
		<h4 class=" text-light-grey uppercase text-xl">Range Fees</h4>
		<ItemList base="RangeFees" />
		<BTN color="yellow">Book Now</BTN>
		<h3 class="text-white uppercase text-xl">In Home Training</h3>
		<p class="font-lato text-oragne font-light text-lg">
			Firearm safety & training with unloaded firearms
		</p>
		<TrainingList base="InHomeTraining" />
		<BTN color="yellow">Book Now</BTN>
	</div>
</section>
