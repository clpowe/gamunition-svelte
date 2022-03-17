<script>
	export let color;
	export let buttonAction;
</script>

<button
	class={`bg-${color} rounded-sm px-4 py-1 uppercase text-body font-oswald btn`}
	on:click={buttonAction}
>
	<slot />
</button>
