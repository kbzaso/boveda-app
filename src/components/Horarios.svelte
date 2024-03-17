<script>
	const horarios = [
		{
			bloque: 'Bloque Básico',
			profesor: 'Sara Phoenix',
			horarios: [
				{
					dia: 'Lunes',
					hora: '18:00 a 19:30 hrs'
				},
				{
					dia: 'Sábado',
					hora: '11:00 a 12:30 hrs'
				}
			]
		},
		{
			bloque: 'Bloque Intermedio',
			profesor: 'Sara Phoenix',
			horarios: [
				{
					dia: 'Martes',
					hora: '19:00 a 20:30 hrs'
				},
				{
					dia: 'Sábado',
					hora: '12:40 a 14:10 hrs'
				}
			]
		},
		{
			bloque: 'Bloque Avanzado',
			profesor: 'Alejandro Sáez',
			horarios: [
				{
					dia: 'Lunes',
					hora: '19:35 a 20:50 hrs'
				}
			]
		}
	];
</script>

<div id="horarios" class="mx-auto w-full md:w-8/12 scroll-mt-10">
	<h2 class="text-3xl font-bold mb-8">⏰ Horarios</h2>
	<div class="overflow-x-auto bg-white rounded-xl p-4 shadow-xl lg:flex lg:justify-between divide-y lg:divide-y-0 lg:divide-x text-center lg:text-left">
		{#each horarios as { bloque, profesor, horarios }, i}
			<div class="py-4 px-8">
        <header>
					<h3 class="text-lg font-bold mb-1">{bloque}</h3>
					<p class="mb-4 truncate">Profesor: {profesor}</p>
        </header>
					{#each horarios as { dia, hora }, i}
						<p key={i}>
							{dia} - {hora}
						</p>
					{/each}
			</div>
		{/each}
	</div>

	<p class="mt-4 uppercase tracking-widest text-gray-500 text-center">(max 12 alumnos por clase)</p>
</div>
