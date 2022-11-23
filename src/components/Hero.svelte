<script>
  import { onMount } from 'svelte';
  onMount(() => {
    document.getElementById('vid').play();
  })
</script>

<header class="relative bg-secondary-content flex items-center justify-center h-screen overflow-hidden">
  <div class="relative z-30 p-5 text-2xl md:w-8/12 lg:w-6/12 flex flex-col">
    <img src="/logo-web.png" alt="Logotipo de la Bóveda Secreta">
    <p class="text-white text-[18px] p-4 text-center tracking-widest uppercase font-light">Centro de entrenamiento de lucha libre, con foco en la preparación física y técnica para un desempeño profesional de la disciplina.</p>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 mt-10 fill-white self-center animate-bounce">
      <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
    </svg>
    
    
  </div>

  <video id="vid"
    autoplay
    loop
    muted
    class="absolute z-10  opacity-20 w-auto min-w-full min-h-full max-w-none">
    <source
      src="/background-web.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>

<!-- <div class="hero bg-secondary-content text-base-100 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="https://placeimg.com/700/400/arch" alt="" class="max-w-full rounded-lg shadow-2xl" />
      <div class="">
        <h1 class="text-5xl font-bold">Boveda Secreta</h1>
        <p class="py-6 text-xl">Centro de entrenamientos de lucha libre, con foco en la preparación física y técnica para un desempeño profesional de la disciplina.</p>
        <button class="btn btn-primary w-full md:w-fit">Me quiero inscribir</button>
      </div>
    </div>
    <video autoplay loop muted>
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div> -->

  