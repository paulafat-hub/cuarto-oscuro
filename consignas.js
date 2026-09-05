/* ============================================================
   CONSIGNAS · el sobre cerrado

   Acá viven las palabras y las técnicas que arman lo que soñás.

   ADVERTENCIA: este archivo es la sorpresa. Mientras más lo leas,
   menos te va a sorprender la pieza. Está escrito para que puedas
   agregarle cosas dentro de seis meses, no para leerlo hoy.

   Si de todos modos quieres sumar material: busca la lista que
   corresponda, agrega un renglón entre comillas con una coma al
   final. Nada más.
   ============================================================ */


/* ------------------------------------------------------------
   1 · LOS FICHEROS
   Los sustantivos, lugares y personajes van CON su artículo
   ("una cerradura", no "cerradura") para que las frases salgan bien
   armadas sin que el programa tenga que adivinar el género.
   ------------------------------------------------------------ */

const sustantivos = [
  "una cerradura", "un pulpo", "una radiografía", "una campana", "un termo",
  "una prótesis", "un carrete de hilo", "una jaula vacía", "un molar",
  "un telegrama", "una brújula rota", "un cepillo de dientes",
  "una libreta de ahorros", "un ventilador de techo", "una máscara de oxígeno",
  "un ancla", "una peluca", "un frasco de éter", "una escalera plegable",
  "un huevo de avestruz", "una cinta métrica", "un piano vertical",
  "una linterna sin pilas", "un cactus", "una dentadura postiza",
  "un espejo retrovisor", "una máquina de coser", "un pescado congelado",
  "una silla de ruedas", "un reloj de arena", "una polilla",
  "un llavero con demasiadas llaves", "una bombilla quemada", "un tobogán",
  "una cortina de baño", "un diente de leche", "una sirena de ambulancia",
  "un pasaporte vencido", "una colmena", "un ojo de vidrio", "una radio a pilas",
  "un maniquí", "una carta sin abrir", "un balde", "un rollo de gasa",
  "un aparato de ortodoncia", "una estampita", "un imán de heladera",
  "una vaca", "una hormiga", "un tren de juguete", "una plancha", "una hélice",
  "un dedal", "una boya", "un acuario sucio", "una máquina de escribir",
  "un delantal de escuela", "un tarro de miel", "una manguera", "un cráneo de pájaro",
  "un botón de nácar", "una lupa", "un colchón inflable",
  "una vela a medio derretir", "un tambor", "un caracol", "una bolsa de hielo",
  "un cuchillo sin filo", "un telescopio de juguete", "una alcancía", "un ombú",
  "un semáforo", "una jeringa", "un abanico", "una escoba",
  "un mapa doblado mal", "una cuerda de guitarra", "un espantapájaros",
  "una lata de duraznos"
];

const lugares = [
  "una sala de espera", "el fondo de una pileta vacía", "un faro sin farero",
  "una estación de tren clausurada", "un hotel fuera de temporada",
  "la trastienda de una relojería", "un aula a las tres de la mañana",
  "un cementerio de barcos", "una isla que aparece cada siete años",
  "un ascensor detenido entre dos pisos",
  "una biblioteca donde los libros se leen solos",
  "un pueblo construido alrededor de un pozo",
  "una casa con una habitación de más", "un mercado que solo abre de noche",
  "un vagón de carga", "una capilla en el medio del campo",
  "un consultorio odontológico un domingo", "un balneario en invierno",
  "una ciudad donde está prohibido dormir", "un puente que nadie terminó",
  "un depósito de objetos perdidos", "una cocina industrial vacía",
  "un país que solo existe en los mapas viejos",
  "un galpón lleno de sillas apiladas", "una pileta de natación municipal",
  "un archivo con las cajas mal rotuladas", "un bosque plantado en hileras",
  "un cine con una sola función",
  "un jardín donde todo florece fuera de estación",
  "una terminal de autobuses a las cinco de la mañana",
  "un manicomio convertido en museo",
  "una casa de la que todos se acuerdan distinto",
  "un desierto con un teléfono público",
  "un edificio donde el ascensor solo sube",
  "una playa de estacionamiento subterránea", "una isla de basura",
  "una sala de máquinas", "una peluquería de barrio",
  "un observatorio abandonado", "un puerto de aguas negras",
  "una ciudad debajo de otra ciudad", "un invernadero roto",
  "una escuela rural con dos alumnos", "un tren que no para nunca",
  "una frontera sin puesto", "un pasillo más largo de noche que de día",
  "una laguna que devuelve lo que se tira", "un altillo",
  "un pabellón de hospital cerrado", "una feria desarmándose"
];

const personajes = [
  "un afinador de pianos", "una traductora", "alguien que corrige textos ajenos",
  "un guardavidas en invierno", "una taxidermista",
  "un cartero de un pueblo sin nombres de calle", "una tejedora zurda",
  "un vendedor de enciclopedias", "una partera", "un relojero ciego",
  "una odontóloga que odia las bocas", "un forense",
  "una locutora de radio nocturna", "un cuidador de faro", "una ex nadadora",
  "un sereno", "una bibliotecaria que esconde libros", "un domador sin animales",
  "una perfumista", "un cobrador de deudas chicas",
  "una fotógrafa de casamientos", "un afilador de cuchillos",
  "una monja que perdió la fe", "un ascensorista", "una cartógrafa",
  "un ventrílocuo", "una enfermera de guardia", "un jardinero municipal",
  "una viuda demasiado joven", "un mago de cumpleaños",
  "una recepcionista de un hotel vacío", "un cura de campo",
  "una nadadora de aguas abiertas", "un apicultor", "una maestra rural",
  "un vendedor de seguros", "una restauradora de cuadros",
  "un electricista supersticioso", "una empleada de un call center",
  "un guía de un museo sin visitantes", "una costurera", "un buzo de puerto",
  "una peluquera que trabaja en velorios", "un panadero insomne",
  "una controladora de vuelo", "un chofer de larga distancia",
  "una veterinaria de animales grandes", "una notaria",
  "un coleccionista de llaves", "un tipo que sabe demasiado de trenes"
];

const acciones = [
  "desenterrar", "confesar", "doblar", "perder a propósito", "esconder",
  "devolver", "imitar", "contar mal", "heredar", "prenderle fuego a", "coser",
  "medir", "robar sin querer", "olvidar el nombre de", "seguir de lejos a",
  "repetir", "tragar", "enterrar de nuevo", "vender", "regalar", "negar",
  "buscar sin ganas", "romper por dentro", "guardar durante años",
  "tirar al agua", "escuchar detrás de una puerta", "apagar", "desarmar",
  "traducir mal", "alquilar", "prestar y no reclamar", "memorizar", "tapar",
  "sacarle una foto a", "hablarle a", "dibujar de memoria", "cambiar de lugar",
  "esperar sentado a", "pedirle perdón a", "mentirle a", "atar", "soltar",
  "pintar de otro color", "abandonar en un autobús", "aprender a odiar"
];

const situaciones = [
  "una mudanza", "un velorio", "una espera en un hospital",
  "la última cena en una casa", "un examen que no estudiaste",
  "una despedida en un andén", "un cumpleaños al que no fue nadie",
  "una discusión por algo mínimo", "un corte de luz largo",
  "una traición chiquita", "la primera noche en una casa nueva",
  "un accidente sin heridos", "una llamada a las cuatro de la mañana",
  "un reencuentro incómodo", "el día que se murió el perro", "una inundación",
  "un casamiento que se suspendió", "una mentira que duró años",
  "un robo sin violencia", "el día que se fue el vecino de al lado",
  "una operación de rutina", "un viaje en auto en silencio",
  "una carta que llegó tarde", "un despido", "un parto",
  "un corte de pelo mal hecho",
  "el momento exacto en que alguien deja de creer",
  "una guardia de veinticuatro horas",
  "una espera en la puerta de un colegio", "la venta de una casa familiar"
];

/* Finales obligatorios: el cuento tiene que llegar hasta aquí. */
const finales = [
  "Y sin embargo volvió a poner la mesa para dos.",
  "Nadie preguntó por el ruido.",
  "Después de eso, la casa empezó a enfriarse por partes.",
  "Lo guardó en el mismo lugar donde guardaba lo que no quería encontrar.",
  "Todavía hoy contesta, si uno insiste.",
  "La marea se lo devolvió tres días más tarde, intacto.",
  "Dijo que sí, y eso fue todo.",
  "Nunca supo que había estado tan cerca.",
  "El resto lo inventaron los vecinos.",
  "Y así fue como aprendió a dormir con la luz prendida.",
  "Firmó con un nombre que no era el suyo y salió caminando.",
  "Al final resultó que el error no era del reloj.",
  "Se quedó del lado de adentro, por las dudas.",
  "Lo demás quedó exactamente igual, pero sin ella.",
  "Nadie volvió a mencionar el asunto del sótano.",
  "Cuando abrieron la valija, entendieron el olor.",
  "Le pareció justo y no dijo nada.",
  "El pueblo siguió creciendo alrededor del hueco.",
  "Ese fue el último invierno en que hubo pescado.",
  "Lo único que se llevó fue la llave.",
  "Desde entonces cuenta la historia como si le hubiera pasado a otro.",
  "El agua tardó cuatro días en bajar.",
  "Después se lavó las manos y se fue a trabajar.",
  "Quedó constancia, pero nadie la leyó.",
  "Y eso fue todo lo que quedó del asunto."
];

/* Figuras de dominio público: mitos, folklore, cuentos viejos. */
const figuras = [
  "el lobo de Caperucita", "el minotauro", "Ulises", "una sirena", "el golem",
  "Barba Azul", "el flautista de Hamelín", "la Bella Durmiente", "Caronte",
  "un vampiro de pueblo", "la Llorona", "el hombre de la bolsa", "Pulgarcito",
  "un ángel caído", "la Muerte con su guadaña", "el rey Midas", "Pinocho",
  "un fantasma de casa alquilada", "el diablo del cuento criollo",
  "la Difunta Correa"
];

/* Las piezas chicas que unen todo lo anterior. */
const relaciones = [
  "contra", "dentro de", "debajo de", "en lugar de", "a cambio de",
  "que persigue a", "que recuerda a", "que no soporta a", "sin", "después de",
  "en nombre de", "que sobrevive a", "atado a", "que se parece demasiado a"
];

const modales = [
  "decidiera", "empezara a", "tuviera que", "se negara a", "aprendiera a",
  "olvidara cómo"
];

const prefijos = [
  "des", "anti", "semi", "bis", "micro", "ex", "super", "archi", "tri",
  "vice", "in", "re", "post", "contra"
];

/* Las funciones de Vladimir Propp: los movimientos que se repiten
   en todos los cuentos populares del mundo. */
const funciones = [
  "una prohibición", "una transgresión", "un engaño", "una partida sin aviso",
  "un socorro que llega tarde", "un objeto que cambia de dueño",
  "una promesa imposible", "un regreso que nadie esperaba",
  "un reconocimiento por una marca en el cuerpo", "una tarea difícil",
  "un falso héroe", "una persecución", "una carencia que nadie nombra",
  "un castigo desproporcionado"
];

/* Restricciones formales, a la manera de Oulipo.
   No aparecen siempre: unas seis de cada diez noches. */
const restricciones = [
  "Sin usar la letra «a».",
  "Sin usar la letra «e».",
  "En segunda persona: todo te pasa a ti.",
  "Todo en una sola oración.",
  "Menos de doscientas palabras.",
  "Sin un solo adjetivo.",
  "Empieza por el final.",
  "Solo diálogo, sin narrador.",
  "Todos los verbos en presente.",
  "Sin usar la palabra «yo».",
  "El narrador miente, y el lector tiene que darse cuenta.",
  "Sin nombrar nunca el objeto principal.",
  "Nueve párrafos de una línea cada uno.",
  "Escrito como una carta que nadie va a contestar.",
  "Escrito como una entrada de enciclopedia.",
  "Sin ninguna coma.",
  "Que la primera y la última oración sean la misma.",
  "Todo transcurre en menos de diez minutos.",
  "Un solo personaje, y está solo.",
  "Sin decir nunca dónde pasa.",
  "Escrito como una lista de instrucciones.",
  "Sin verbos en pasado.",
  "Que no pase nada y aun así se entienda todo.",
  "Escrito para alguien que no lo va a leer."
];


/* ------------------------------------------------------------
   2 · HERRAMIENTAS
   Funciones chiquitas que usan las técnicas de más abajo.
   ------------------------------------------------------------ */

/* Devuelve un elemento cualquiera de una lista. */
function alAzar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

/* Devuelve varios elementos distintos entre sí de una misma lista. */
function variosAlAzar(lista, cuantos) {
  const copia = lista.slice();
  const elegidos = [];
  while (elegidos.length < cuantos && copia.length) {
    const i = Math.floor(Math.random() * copia.length);
    elegidos.push(copia.splice(i, 1)[0]);
  }
  return elegidos;
}

/* Saca el artículo: "una cerradura" -> "cerradura". */
function sinArticulo(frase) {
  return frase.replace(/^(un|una|el|la|los|las)\s+/, "");
}

/* Pone en mayúscula la primera letra. */
function mayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/* El "error creativo" de Rodari: cambiarle una vocal a una palabra
   hasta que deja de significar lo que significaba y significa otra cosa. */
function equivocar(palabra) {
  const vocales = "aeiou";
  const posiciones = [];
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) posiciones.push(i);
  }
  if (!posiciones.length) return palabra + "s";

  const i = alAzar(posiciones);
  const otras = vocales.replace(palabra[i], "");
  const nueva = otras[Math.floor(Math.random() * otras.length)];
  return palabra.slice(0, i) + nueva + palabra.slice(i + 1);
}


/* ------------------------------------------------------------
   3 · LAS TÉCNICAS
   Cada una es una manera distinta de fabricar una consigna.
   Todas vienen de Gianni Rodari (Gramática de la fantasía),
   de Vladimir Propp o del taller de Oulipo.

   Para agregar una técnica nueva: copia una de estas, cámbiale el
   nombre y lo que devuelve. El resto del programa se entera solo.
   ------------------------------------------------------------ */

const tecnicas = [

  {
    nombre: "binomio fantástico",
    combinaciones: () => sustantivos.length * (sustantivos.length - 1) * relaciones.length,
    armar() {
      const [a, b] = variosAlAzar(sustantivos, 2);
      return mayuscula(a) + " " + alAzar(relaciones) + " " + b + ".";
    }
  },

  {
    nombre: "hipótesis fantástica",
    combinaciones: () => personajes.length * modales.length * acciones.length * (sustantivos.length + lugares.length),
    armar() {
      const quien = alAzar(personajes);
      const modal = alAzar(modales);
      const que = alAzar(acciones);
      const cosa = Math.random() < 0.55
        ? alAzar(sustantivos)
        : "algo en " + alAzar(lugares);
      return "¿Qué pasaría si " + quien + " " + modal + " " + que + " " + cosa + "?";
    }
  },

  {
    nombre: "prefijo arbitrario",
    combinaciones: () => prefijos.length * sustantivos.length,
    armar() {
      const palabra = sinArticulo(alAzar(sustantivos)).split(" ")[0];
      const inventada = alAzar(prefijos) + palabra;
      return "Existe algo que se llama «" + inventada + "». Cuenta qué es, para qué sirve y quién no puede vivir sin eso.";
    }
  },

  {
    nombre: "error creativo",
    combinaciones: () => sustantivos.length * 4,
    armar() {
      const original = sinArticulo(alAzar(sustantivos)).split(" ")[0];
      let errada = equivocar(original);
      if (errada === original) errada = original + "a";
      return "Alguien quiso escribir «" + original + "» y le salió «" + errada + "». Escribe el cuento que explica qué es «" + errada + "».";
    }
  },

  {
    nombre: "punto de vista desplazado",
    combinaciones: () => situaciones.length * sustantivos.length,
    armar() {
      return "Cuenta " + alAzar(situaciones) + " desde el punto de vista de " + alAzar(sustantivos) + ".";
    }
  },

  {
    nombre: "lugar imaginario",
    combinaciones: () => lugares.length * 3,
    armar() {
      const preguntas = [
        "Escribe su entrada de catálogo: cómo se llega, qué está prohibido y quién no salió nunca de ahí.",
        "Escribe su entrada de catálogo: quién lo fundó, por qué se vació y qué quedó adentro.",
        "Escribe su entrada de catálogo: qué se oye de noche, qué está prohibido tocar y qué pasa si te quedas."
      ];
      return mayuscula(alAzar(lugares)) + ". " + alAzar(preguntas);
    }
  },

  {
    nombre: "cartas de Propp",
    combinaciones: () => funciones.length * (funciones.length - 1) * (funciones.length - 2),
    armar() {
      const tres = variosAlAzar(funciones, 3);
      return "El cuento tiene que pasar por aquí, en este orden: " + tres[0] + ", después " + tres[1] + ", y al final " + tres[2] + ".";
    }
  },

  {
    nombre: "el último renglón",
    combinaciones: () => finales.length,
    armar() {
      return "El cuento termina con esta frase, exacta: «" + alAzar(finales) + "» Todo lo que va antes lo pones tú.";
    }
  },

  {
    nombre: "la piedra en el estanque",
    combinaciones: () => sustantivos.length,
    armar() {
      const palabra = sinArticulo(alAzar(sustantivos));
      return "Palabra: " + palabra + ". Escribe de un tirón las diez palabras que te trae, sin pensarlas. Después escribe el cuento usando la séptima.";
    }
  },

  {
    nombre: "ensalada de cuentos",
    combinaciones: () => figuras.length * (figuras.length - 1) * lugares.length,
    armar() {
      const [uno, otro] = variosAlAzar(figuras, 2);
      return mayuscula(uno) + " y " + otro + " coinciden en " + alAzar(lugares) + ". Ninguno de los dos entiende qué hace el otro ahí.";
    }
  }

];


/* ------------------------------------------------------------
   4 · SOÑAR
   La función que usa el resto del programa. Elige una técnica
   al azar, la deja armar la consigna, y seis de cada diez veces
   le agrega una restricción formal.
   ------------------------------------------------------------ */

function sonar() {
  const tecnica = alAzar(tecnicas);
  return {
    tecnica: tecnica.nombre,
    texto: tecnica.armar(),
    restriccion: Math.random() < 0.6 ? alAzar(restricciones) : null
  };
}

/* Cuántos sueños distintos puede llegar a producir este archivo.
   Se calcula solo: si agregas palabras, el número sube. */
function suenosPosibles() {
  const base = tecnicas.reduce((suma, t) => suma + t.combinaciones(), 0);
  return base * (restricciones.length + 1);
}
