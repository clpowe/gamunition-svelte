<script>
	import ItemList from './Training/ItemList.svelte';
</script>

<section class="bg-light py-40 font-oswald ">
	<div class="mycontainer text-center">
		<h2 class=" to-gun-blackext- text-3xl uppercase leading-none">Firearm Services</h2>
		<div class="flex justify-center gap-8 flex-col md:flex-row">
			<div>
				<h4 class=" text-light-grey uppercase text-xl">Purchase & Selling</h4>
				<ItemList base="PurchaseAndSell" />
			</div>
			<div>
				<h4 class=" text-light-grey uppercase text-xl">Weapon cleaning</h4>
				<ItemList base="WeaponCleaning" />
			</div>
		</div>
	</div>
</section>
