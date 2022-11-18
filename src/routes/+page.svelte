<script>
    import "../app.css";
    import Hero from '../components/Hero.svelte'
    import Horarios from '../components/Horarios.svelte'
    import Valores from '../components/Valores.svelte'
    import Profe from '../components/Profe.svelte'
    import Maps from '../components/Maps.svelte'
    import Footer from '../components/Footer.svelte'

    const profes = {
        zatara: {
            name: 'Zatara - La Cabrona',
            img: 'zatara.jpg',
            description: 'Debuta como luchadora el año 2008 en Santiago. Luego de diversas participaciones en distintas promociones de Chile, y de haber debutado el 2018 en México, es confirmada como la primera mujer chilena en participar en un torneo de la WWE. Zatara participó el 2018 en la segunda edición del torneo WWE Mae Young Classic. El mismo año participa en el Tryout realizado en Chile por la WWE, donde obtendría recursos y conocimientos que junto a los obtenidos en su experiencia nacional e internacional, la transforman en una luchadora ideal para transmitir conocimientos tanto a luchadores ya formados, como a futuros luchadores.',
            work: "WWE's Mae Young Classic Tournament, WWE Latin American try out, Dragonmania, Imperio, 5 Luchas Clandestino.",
            igLink: 'https://www.instagram.com/zatara.cabrona/'
        },
        juan: {
            name:'Juan',
            img: 'juan.jpg',
            description: 'De profesión Preparador Físico de Universidad Santo Tomás, hace su debut como luchador el año 2017, haciendo su carrera principalmente en 5 Luchas Clandestino. Su formación como luchador la realizó principalmente bajo el alero de Guanchulo, en Yeyos Dojo, junto a otros profesores como Zatara y Alejandro "XL" Sáez. El 2022 comenzó a luchar regularmente en 5 Luchas Clandestino, ganándose en un par de eventos el cariño y respetos del exigente público de la asociación, lo que transforma en uno de los solicitados en las carteleras.',
            work:'5 Luchas Clandestino, Chile Lucha Libre, Max Lucha Libre, La Lucha Regresa.',
            igLink: 'https://www.instagram.com/juancontreraspf/'
        }
    }
    const { zatara } = profes
    const { juan } = profes
</script>

<div class="bg-base-200 min-h-screen">
    <Hero/>
    <div class="container mx-auto my-6">
        <div class="flex flex-col gap-10 mx-4 md:flex-row mt-10 md:mx-auto border justify-center">
            <Horarios/>
            <Valores/>
        </div>
        <div class="my-20">
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