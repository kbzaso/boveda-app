<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import "../app.css";
    import Hero from '../components/Hero.svelte'
    import Horarios from '../components/Horarios.svelte'
    import Valores from '../components/Valores.svelte'
    import Profe from '../components/Profe.svelte'
    import Maps from '../components/Maps.svelte'
    import Footer from '../components/Footer.svelte'
    import HamMenu from '../components/HamMenu.svelte'
    import Callout from '../components/Callout.svelte'

    const profes = {
        zatara: {
            name: 'Zatara - La Cabrona',
            img: 'zatara.jpg',
            description: 'Luchadora Chilena con más de 14 años de experiencia y diferentes reconocimientos y logros a nivel local e internacional. El 2018 se presenta por primera vez en la Arena México, además de ser seleccionada para participar del Torneo “Mae Young Classic” de WWE y el Tryout Latinoamericano realizado en Chile por la misma empresa. Tras un exitoso paso como instructora de lucha libre del “Yeyos Dojo” el 2020, retoma este año el mismo rol en la Bóveda Secreta a fin de transmitir lo aprendido a los nuevos prospectos de la lucha libre Chilena.',
            work: "WWE's Mae Young Classic Tournament, WWE Latin American try out, Dragonmania, Imperio Lucha Libre, 5 Luchas Clandestino, Revolución Lucha Libre, entre otras.",
            igLink: 'https://www.instagram.com/zatara.cabrona/'
        },
        juan: {
            name:'Juan',
            img: 'juan.jpg',
            description: 'Preparador Físico de la Universidad Santo Tomás, debuta el 2017 como luchador bajo el alero de Guanchulo y Alejandro “XL” Saez como principales mentores. De estos últimos, toma las bases de su formación y visión de la lucha libre, siendo parte importante del círculo de trabajo más cerrado del “Yeyos Dojo”. La suma de sus conocimientos formativos sitúan a Juan como un sólido referente en la formación de luchadores profesionales capacitados para desenvolverse en la escena local e internacional.',
            work:'5 Luchas Clandestino, Chile Lucha Libre, Max Lucha Libre, La Lucha Regresa.',
            igLink: 'https://www.instagram.com/juancontreraspf/'
        }
    }
    const { zatara } = profes
    const { juan } = profes

    let show = false;

    onMount(() => {
        show = true;
    })

</script>

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    {#if show}
    <div class="drawer-content" >
        <HamMenu/>
        <div class="bg-base-200 min-h-screen" transition:fade>
            <Hero/>
            <Callout/>
            <div class="container mx-auto my-6">
                <div class="flex flex-col gap-10 mx-4 md:flex-row mt-10 md:mx-auto border justify-center">
                    <Horarios/>
                    <Valores/>
                </div>
                <div class="my-20 scroll-mt-10" id="profesores">
                    <h2 class="text-3xl font-bold mx-4 mb-4 mt-10">🤼‍♀️ Profesores</h2>
                    <div class="flex gap-10 mt-8 mx-4 flex-col md:flex-row">
                        <Profe img={zatara.img} name={zatara.name} description={zatara.description} work={zatara.work} igLink={zatara.igLink}/>
                        <Profe img={juan.img} name={juan.name} description={juan.description} work={juan.work} igLink={juan.igLink} />
                    </div>
                </div>
            </div>
            <Maps/>
            <Footer/>
        </div>
    </div> 
    {/if}
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content flex gap-2 text-lg uppercase tracking-widest">
        <img src="/logo.png" alt="Logotipo de la Bóveda secreta" class=" w-36 self-center mb-4">
        <!-- Sidebar content here -->
        <li><a on:click={() => {document.getElementById('my-drawer').click()}} href="/#valores"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg> Valores</a></li>
        <li><a on:click={() => {document.getElementById('my-drawer').click()}} href="/#horarios"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
           Horarios</a></li>
           <li><a on:click={() => {document.getElementById('my-drawer').click()}} href="/#profesores">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>              
           Profesores</a></li>
        <li><a href="https://tally.so#tally-open=wdbPAK&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave" class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
           Me quiero inscribir</a></li>

           <li>
           <a href="https://www.instagram.com/bovedasecreta/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 fill-yellow-500 self-center" viewBox="0 0 30 30"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>INSTAGRAM</a>
        </li>
      </ul>
    </div>
  </div>