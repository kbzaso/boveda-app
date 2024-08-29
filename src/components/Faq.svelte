<script>
	const faq = [
		{
			question: '¿Qué necesito para inscribirme?',
			answer:
				'Primero, asegúrate de estar en condiciones de salud aptas para la práctica de ejercicio físico y esta disciplina de combate. Luego, simplemente llena el formulario en este enlace, y te contactaremos por WhatsApp para confirmar tu asistencia a los entrenamientos que elijas. Así, te guiaremos en el proceso de inscripción de clases. ¡Es fácil y rápido!'
		},
		{
			question: '¿Desde que edad puedo inscribirme?',
			answer:
				'La edad mínima es de 16 años con documento de autorización explícita de su tutor para la práctica de esta disciplina.'
		},
		{
			question: '¿Cómo me inscribo a una clase única?',
			answer:
				'Puedes inscribirte en el formulario que se encuentra al hacer click en el botón "Me quiero inscribir", como también contactarnos directamente a través del botón de Whatsapp. '
		},
		{
			question: '¿Qué necesito para entrenar?',
			answer:
				'Recomendamos ropa limpia, cómoda y ligera. Estarás en constante movimiento, por lo que te sugerimos vestir algo que te permita desempeñar diversos tipos de ejercicio sin preocupaciones ni molestias. <br><br> La polera deberá contar con mangas (cortas o largas), no tank, top, sin mangas, musculosa, etc. <br><br>Considera una polera extra, ya que durante el entrenamiento hacemos un recambio para prevalecer la higiene del entrenamiento.<br><br>Al ser un deporte de contacto, mantener una higiene saludable es primordial para reforzar el respeto por nuestros compañeros, el espacio y la disciplina.<br><br>En base a lo mismo, solicitamos además calzado específico para el entrenamiento con el fin de no utilizar en el ring el mismo calzado que utilizamos en la calle.<br><br>Rodilleras, coderas, bucal y protección en general, son recomendadas para prevención, pero no obligatorias. Te sugerimos además, llevar una toalla de manos, así como una botella de agua personal.'
		},
		{
			question: '¿Tienen duchas en la Bóveda?',
			answer:
				'La Bóveda cuenta con baños y camarines operativos para hombres y mujeres. Estos cuentan con todos los servicios higiénicos necesarios, así como duchas con agua caliente habilitadas todo el año. No incluye artículos de baño ni toallas.'
		},
		{
			question: '¿Qué pasa si llego tarde a un entrenamiento?',
			answer:
				'El límite para sumarte a un entrenamiento es de 15 minutos. Pasado ese tiempo te perderás parte esencial para el desarrollo correcto del resto del programa de la clase y pone en riesgo tu bienestar físico y el de tus compañeros. '
		},
		{
			question: '¿Qué pasa si no ocupo mis clases durante el mes que me inscribí?',
			answer:
				'Las clases tienen un (1) mes de validez a partir del día de tu inscripción, las perderás si no las ocupas según el plan que solicitaste.'
		},
		{
			question: '¿Puedo ir en bicicleta?',
			answer:
				'Si, la Bóveda cuenta con suficiente espacio para tu bici, sin embargo, es responsabilidad de sus propietarios y no nos hacemos responsables por pérdidas o deterioros de la misma.'
		},
		{
			question: '¿Tienen estacionamiento para autos o motos en la Bóveda?',
			answer:
				'No, la Bóveda ni la galería Nueva Copacabana cuentan con estacionamientos disponibles para vehículos motorizados. '
		}
	];

	import { onMount } from 'svelte';

	let isFirst = true;

	onMount(() => {
		const radios = document.querySelectorAll('input[type="radio"][name="my-accordion-4"]');
		if (radios.length > 0) {
			radios[0].checked = true;
		}
	});
</script>

<section class="w-full bg-neutral text-white py-10 pattern">
	<div class="container mx-auto pb-10">
		<h2 class="text-3xl font-bold text-center">🧐 Preguntas Frecuentes</h2>
	</div>
	<div class=" max-w-2xl mx-auto">
		{#each faq as item, index}
			<!-- content here -->
			<div class="join join-vertical w-full">
				<div class="collapse collapse-arrow join-item">
					<input
						type="radio"
						name="my-accordion-4"
						class="peer"
						checked={index === 0 ? isFirst : false}
						on:change={() => (isFirst = false)}
					/>
					<div
						class="collapse-title text-xl font-medium peer-checked:bg-base-200 peer-checked:text-neutral"
					>
						{item.question}
					</div>
					<div class="collapse-content peer-checked:bg-base-200 peer-checked:text-neutral">
						<p>{@html item.answer}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>



<style>
    .pattern{
      background: linear-gradient(45deg, #08001b 25%, transparent 25%), linear-gradient(315deg, #08001b 25%, transparent 25%) ,linear-gradient(45deg, transparent 24%,#221343 25%, #221343 30%, transparent 31%, transparent 39%,#221343 40%, #221343 45%, transparent 45%),linear-gradient(315deg, transparent 24%,#221343 25%, #221343 30%, transparent 31%, transparent 39%,#221343 40%, #221343 45%, transparent 45%);
          background-size: 2em 2em;
          background-color: #08001b;
          opacity: 1
    }
  </style>