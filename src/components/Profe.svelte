<script>
import { onMount, onDestroy } from "svelte";

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

<div class="flex flex-col md:flex-row w-full items-stretch bg-white border rounded-2xl shadow-xl relative">
	<figure>
		<img class="object-cover h-full w-full lg:min-w-96 rounded-tl-lg rounded-bl-lg transition-all" src={coach.img} alt={coach.name} />
	</figure>
  <div class="absolute top-4 left-4">
    {#if coach.igLink}
      <a href={coach.igLink} target="_blank"
        ><svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-yellow-400" viewBox="0 0 30 30"
          ><path
            d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
          /></svg
        ></a
      >
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
