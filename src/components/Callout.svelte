<script>
	import { OctagonAlert } from 'lucide-svelte';
</script>

<div
	class="bg-red-700 grid mx-auto place-items-center px-4 w-full md:w-[600px] rounded-xl shadow-lg text-white"
>
	<div class="flex gap-2 px-4 py-8">
        <OctagonAlert size={64} />
		<div>
			<h2 class="font-bold text-lg uppercase text-pretty">Las inscripciones están cerradas momentaneamente debido a la alta demanda.</h2>
            <p class="text-lg mt-2 text-pretty">Última actualización: Miércoles 11 de Junio, 2025</p>
		</div>
	</div>
</div>
