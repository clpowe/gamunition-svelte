<script>
	export let color;
</script>

<button class={`bg-${color} rounded-sm px-4 py-1 uppercase text-body font-oswald btn`}>
	<slot />
</button>
