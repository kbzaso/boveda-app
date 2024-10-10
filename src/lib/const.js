export let coaches = [
    {
        status: true,
        name: 'Zatara - La Cabrona',
        img: '/zatara.jpg',
        description:
            'Luchadora Chilena con más de 15 años de experiencia y diferentes reconocimientos y logros a nivel local e internacional.<br><br>El 2018 se presenta por primera vez en la Arena México, además de ser seleccionada para participar del Torneo “Mae Young Classic” de WWE y el Tryout Latinoamericano realizado en Chile por la misma empresa. <br><br>Tras un exitoso paso como instructora de lucha libre del “Yeyos Dojo” el 2020, retoma el mismo rol en la Bóveda Secreta a fin de transmitir lo aprendido a los nuevos prospectos de la lucha libre Chilena. <br><br> <b>Ha trabajado para empresas como: </b>5 Luchas Clandestino, WWE`s Mae Young Classic Tournament, WWE Latin American try out, Dragonmania, Imperio Lucha Libre, Brazilian Wrestling Federation, Revolución Lucha Libre, entre otras...',
        igLink: 'https://www.instagram.com/zatara.cabrona/'
    },
    {
        status: false,
        name: 'Juan',
        img: 'https://res.cloudinary.com/dtj5xnlou/image/upload/v1669400279/JUAN-PROFESOR.jpg',
        description:
            'Preparador Físico de la Universidad Santo Tomás, debuta el 2017 como luchador bajo el alero de Guanchulo y Alejandro “XL” Saez como principales mentores. De estos últimos, toma las bases de su formación y visión de la lucha libre, siendo parte importante del círculo de trabajo más cerrado del “Yeyos Dojo”. La suma de sus conocimientos formativos sitúan a Juan como un sólido referente en la formación de luchadores profesionales capacitados para desenvolverse en la escena local e internacional.',
        work: '5 Luchas Clandestino, Chile Lucha Libre, Max Lucha Libre, Trash.',
        igLink: 'https://www.instagram.com/juancontreraspf/'
    },
    {
        status: false,
        name: 'Sara Phoenix',
        img: '/sara.avif',
        description:
            'Luchadora Chilena con más de 10 años de experiencia en la lucha libre. Alumna de Guanchulo y  pioneras en la evolución constante de la lucha libre femenina en Chile, abriendo el camino para las futuras generaciones femeninas en la industria nacional.',
        work: '5 Luchas Clandestino, Imperio Lucha Libre, Gladiadores, Trash',
        igLink: 'https://www.instagram.com/sara.phoenix.wrestler/'
    },
    {
        status: false,
        name: 'Alejandro Sáez',
        img: '/xl.avif',
        description:
            'Experimentado luchador con más de 15 años de trayectoria en la lucha libre nacional e internacional. Su vasta experiencia y conocimientos en la lucha libre lo convierten en un referente para las nuevas generaciones de luchadores y luchadoras.',
        work: '5 Luchas Clandestino, WWE, NOAH Prowrestling, Dragonmanía, Gladiadores, BWF, Trash, entre otras.',
    },
];

export const horarios = [
    {
        bloque: 'Bloque Básico',
        profesor: 'Zatara',
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
        profesor: 'Zatara',
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
        profesor: 'Zatara',
        horarios: [
            {
                dia: 'Lunes',
                hora: '19:35 a 20:50 hrs'
            },
            {
                dia: 'Jueves',
                hora: '19:00 a 20:30 hrs'
            }
        ]
    }
];

export const blocks = [
    {
        title: 'Bloque Básico',
        content: '¡Este es tu lugar para comenzar o retomar tu camino en la lucha libre!<br><br>Aquí, te proporcionaremos las herramientas esenciales para formarte como luchador, con un enfoque en desarrollar tu condición física y dominar los fundamentos del deporte. <br><br>En este nivel, aprenderás ejercicios clave que fortalecerán tu cuerpo y te prepararán para controlar cada movimiento sobre el ring. <br><br><b>¡Es hora de dar el primer paso hacia tu grandeza!</b>',
        video: 'https://res.cloudinary.com/dtj5xnlou/video/upload/v1725239368/5LC/bloque_basico.mp4'

    },
    {
        title: 'Bloque Intermedio',
        content: 'Si quieres pulir tus habilidades y reforzar tu destreza técnica, ¡el bloque intermedio es para ti! <br><br> Aquí, perfeccionarás lo básico y desarrollarás técnicas avanzadas para enfrentar desafíos más exigentes. <br><br> Te prepararás en un entorno competitivo que te llevará a dar lo mejor de ti. <br><br> <b>¡Es el momento de subir de nivel!</b>',
        video: 'https://res.cloudinary.com/dtj5xnlou/video/upload/v1725239655/5LC/bloque_intermedio.mp4'
    },
    {
        title: 'Bloque Avanzado',
        content: 'El bloque avanzado es donde los prospectos de la Bóveda y los luchadores en competencia se encuentran para refinar sus habilidades y enfrentar desafíos mayores. <br><br>Aquí, potenciarás tu presencia en el ring, mejorarás tu flujo de combate, afinarás tu estrategia ofensiva y te prepararás para brillar en el entorno profesional. <br><br> <b>¡Es el momento de consolidar tu carrera como luchador!</b>',
        video: 'https://res.cloudinary.com/dtj5xnlou/video/upload/v1725239657/5LC/bloque_avanzado.mp4'
    }
];