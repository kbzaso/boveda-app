<script>
  import { fade, slide } from 'svelte/transition';

  export let info;
  export let truncateAt = 150; // Number of characters to show before truncating

  let { title, content, video } = info;

  let isExpanded = false;
  $: displayContent = isExpanded ? content : content.slice(0, truncateAt);
  $: shouldTruncate = content.length > truncateAt;
</script>

<article class="card bg-base-100 shadow-xl flex-1 sub-items h-max">
  <!-- <figure class="h-72">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure> -->
  <video
		id="vid"
		autoplay
		loop
		muted
		playsinline
		poster="https://res.cloudinary.com/dtj5xnlou/image/upload/v1669293222/background3.jpg"
		class=""
	>
		<source
			src={video}
			type="video/mp4"
		/>
		Tu navegador no soporta video
	</video>
  <div class="card-body p-4">
    <h2 class="card-title">{title}</h2>
    <div class="text-gray-700">
      {#if isExpanded}
        <span 
        >
          {@html content}
        </span>
      {:else}
        <span>{@html displayContent}{shouldTruncate ? '...' : ''}</span>
      {/if}
    </div>

    {#if shouldTruncate}
      <button
        on:click={() => isExpanded = !isExpanded}
        class="w-full mt-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral transition-colors duration-200"
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
</article>