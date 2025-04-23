<script>
	import { onMount, onDestroy } from 'svelte';
	import { UserRoundSearch } from 'lucide-svelte';
	import { Instagram } from 'lucide-svelte';
	export let coach;
	export let truncateAt = 150; // Number of characters to show before truncating

	let isExpanded = false;
	let isMobileDevice = false;

	$: displayContent = isExpanded ? coach.description : coach.description.slice(0, truncateAt);
	$: shouldTruncate = coach.description.length > truncateAt;

	// Utility function to detect if the device is mobile
	function isMobile() {
		return window.innerWidth <= 768;
	}

	function handleResize() {
		isMobileDevice = isMobile();
		isExpanded = !isMobileDevice ? true : false;
	}

	onMount(() => {
		isMobileDevice = isMobile();
		isExpanded = !isMobileDevice ? true : false;

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="flex flex-col w-full items-stretch bg-white border rounded-2xl shadow-xl relative">
	<figure>
		<img
			class="object-cover h-full w-full lg:min-w-96 rounded-tl-lg rounded-bl-lg transition-all"
			src={coach.img}
			alt={coach.name}
		/>
	</figure>
	<div class="absolute top-4 left-4">
			{#if coach.igLink}
				<a href={coach.igLink} target="_blank">
					<Instagram class="w-10 h-10 stroke-primary"/>
				</a>
			{/if}
			{#if coach.profile}
				<a href={coach.profile} class="relative top-2" target="_blank">
					<UserRoundSearch class="w-10 h-10 stroke-primary"/>
				</a>
			{/if}
	</div>

	<div class="flex flex-col p-4 w-full">
		<div class="h-full">
			<h5 class="mb-2 text-2xl font-bold tracking-tight">{coach.name}</h5>

			{#if isExpanded}
				<span>
					{@html coach.description}
				</span>
			{:else}
				<span>{@html displayContent}{shouldTruncate ? '...' : ''}</span>
			{/if}
			{#if shouldTruncate && isMobileDevice}
				<button
					on:click={() => (isExpanded = !isExpanded)}
					class="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral transition-colors duration-200"
					aria-expanded={isExpanded}
				>
					<span class="flex items-center justify-center">
						{#if isExpanded}
							<span>Mostrar menos</span>
						{:else}
							<span>Leer más</span>
						{/if}
					</span>
				</button>
			{/if}
		</div>
	</div>
</div>
