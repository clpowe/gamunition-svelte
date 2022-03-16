<script>
	import TrainingList from './Training/TrainingList.svelte';
	import ItemList from './Training/ItemList.svelte';
	import BTN from '$lib/btn.svelte';
</script>

<section class="py-40 font-oswald ">
	<div class="mycontainer text-center">
		<h2 class="text-yellow text-3xl uppercase">Training</h2>
		<h3 class="text-light uppercase text-xl mb-14">At the range (LIVE FIRE)</h3>
		<TrainingList base="LiveFireTraining" />
		<h4 class=" text-light-grey uppercase text-xl mt-14 mb-8">Range Fees</h4>
		<ItemList base="RangeFees" />
		<div class="mt-14">
			<BTN color="yellow">Book Now</BTN>
		</div>
		<h3 class="text-light uppercase text-xl mt-14">In Home Training</h3>
		<p class="font-lato text-oragne font-light text-lg mb-14">
			Firearm safety & training with unloaded firearms
		</p>
		<div class="mb-8">
			<TrainingList base="InHomeTraining" />
		</div>
		<div class="mb-14">
			<ItemList base="inHomeAddOns" />
		</div>
		<BTN color="yellow">Book Now</BTN>
	</div>
</section>
