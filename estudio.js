/* ============================================================
   ESTUDIO · la maquinaria

   Todo lo que hace que la pieza funcione: pasar de una pantalla
   a otra, el reloj, guardar lo que escribís y mostrar el archivo.

   Las palabras no están aquí: están en consignas.js.
   ============================================================ */


/* ------------------------------------------------------------
   1 · LAS CONSTANTES
   Los números que quizá quieras cambiar alguna vez.
   ------------------------------------------------------------ */

const MINUTOS = 20;                                  // dura la sesión
const SUENOS_POR_NOCHE = 5;                          // cuántas veces puedes cambiar la consigna
const ESTRELLAS = 90;                                // cuántas hay en el cielo
const AVISO_FINAL = 120;                             // segundos en que el reloj se enciende
const LLAVE_SESIONES = "cuarto-oscuro-sesiones";     // dónde se guarda todo
const LLAVE_BORRADOR = "cuarto-oscuro-borrador";     // el rescate por si se cierra el navegador


/* ------------------------------------------------------------
   2 · EL ESTADO
   Las tres cosas que el programa necesita recordar mientras corre.
   ------------------------------------------------------------ */

let sueno = null;        // la consigna de esta sesión
let restan = 0;          // segundos que quedan
let latido = null;       // el reloj andando (o null si está parado)
let cambios = 0;         // cuántos sueños pediste esta noche


/* ------------------------------------------------------------
   3 · ATAJOS
   ------------------------------------------------------------ */

const $ = (id) => document.getElementById(id);

/* Muestra una sola pantalla y esconde las otras tres. */
function mostrar(cual) {
  ["umbral", "pantalla-consigna", "pantalla-hoja", "pantalla-cierre"]
    .forEach((id) => $(id).classList.toggle("oculto", id !== cual));

  /* Con el velador prendido no se ven las estrellas. */
  $("cielo").classList.toggle("oculto", cual === "pantalla-hoja");

  window.scrollTo(0, 0);
}

/* Vuelve a lanzar las animaciones de "emerger" dentro de una pantalla.
   Sin esto, la segunda consigna aparecería de golpe: el navegador
   considera que esa animación ya la corrió una vez. */
function volverAEmerger(contenedor) {
  [contenedor, ...contenedor.querySelectorAll(".emerge")].forEach((elemento) => {
    elemento.style.animation = "none";
    elemento.offsetHeight;              // obliga al navegador a recalcular
    elemento.style.animation = "";
  });
}


/* ------------------------------------------------------------
   4 · SOÑAR
   Pedirle una consigna a consignas.js y mostrarla.
   ------------------------------------------------------------ */

function dormir(esCambio) {
  if (esCambio) cambios++;
  sueno = sonar();

  $("etiqueta-tecnica").textContent = sueno.tecnica;
  $("texto-consigna").textContent = sueno.texto;

  const linea = $("texto-restriccion");
  linea.textContent = sueno.restriccion || "";
  linea.classList.toggle("oculto", !sueno.restriccion);

  /* La primera consigna de la noche emerge despacio; las siguientes,
     rápido. La vista ya se acomodó a la oscuridad. */
  $("pantalla-consigna").classList.toggle("rapido", cambios > 0);

  actualizarCambios();
  mostrar("pantalla-consigna");
  volverAEmerger($("pantalla-consigna"));
}

/* El botón de cambiar de sueño se gasta: cinco por noche y se acabó.
   El límite es a propósito. Sin límite volverías a apretar hasta que
   apareciera una consigna cómoda, y las cómodas no sirven para escribir. */
function actualizarCambios() {
  const quedan = SUENOS_POR_NOCHE - cambios;
  const boton = $("boton-otro-sueno");
  boton.classList.toggle("oculto", quedan <= 0);
  boton.textContent = quedan === 1
    ? "otro sueño · queda 1"
    : "otro sueño · quedan " + quedan;
}


/* ------------------------------------------------------------
   5 · ESCRIBIR
   Se enciende la hoja y arranca el reloj.
   ------------------------------------------------------------ */

function escribir() {
  $("hoja-tecnica").textContent = sueno.tecnica;
  $("hoja-consigna").textContent = sueno.texto;

  const linea = $("hoja-restriccion");
  linea.textContent = sueno.restriccion || "";
  linea.classList.toggle("oculto", !sueno.restriccion);

  $("escritura").value = "";
  mostrar("pantalla-hoja");
  volverAEmerger($("pantalla-hoja"));   // vuelve a encender la luz
  $("tiempo").classList.remove("oculto");
  $("escritura").focus();

  arrancarReloj();
}

function arrancarReloj() {
  restan = MINUTOS * 60;
  pintarReloj();
  latido = setInterval(() => {
    restan--;
    pintarReloj();
    if (restan <= 0) cerrar(true);
  }, 1000);
}

function pintarReloj() {
  const minutos = Math.floor(restan / 60);
  const segundos = restan % 60;
  $("reloj").textContent = minutos + ":" + String(segundos).padStart(2, "0");
  $("reloj").classList.toggle("se-acaba", restan <= AVISO_FINAL);

  /* La línea de arriba se acorta: es una vela, no una cuenta regresiva. */
  $("tiempo-resto").style.width = (restan / (MINUTOS * 60)) * 100 + "%";
}


/* ------------------------------------------------------------
   6 · CERRAR
   Se acabó el tiempo, o cortaste tú. Se guarda y se muestra
   lo que hiciste.
   ------------------------------------------------------------ */

function cerrar(porTiempo) {
  clearInterval(latido);
  latido = null;
  $("tiempo").classList.add("oculto");

  const texto = $("escritura").value.trim();
  const minutosUsados = Math.max(1, Math.round(MINUTOS - restan / 60));

  if (texto) {
    guardarSesion({
      fecha: new Date().toISOString(),
      tecnica: sueno.tecnica,
      consigna: sueno.texto,
      restriccion: sueno.restriccion,
      texto: texto,
      minutos: minutosUsados
    });
  }

  localStorage.removeItem(LLAVE_BORRADOR);

  const palabras = texto ? texto.split(/\s+/).length : 0;
  $("cierre-resumen").textContent = texto
    ? palabras + (palabras === 1 ? " palabra" : " palabras") + " en " + minutosUsados + (minutosUsados === 1 ? " minuto" : " minutos") + "."
    : "Esta vez no quedó nada escrito. Pasa.";

  $("cierre-titulo").textContent = porTiempo ? "Se acabó el tiempo." : "Cerraste la hoja.";
  $("acciones-cierre").classList.toggle("oculto", !texto);

  dibujarArchivo();
  mostrar("pantalla-cierre");
  volverAEmerger($("pantalla-cierre"));
}


/* ------------------------------------------------------------
   7 · LA MEMORIA
   Todo vive en localStorage: un cajón que el navegador reserva para
   esta página y nada más. No sale de tu computadora.
   ------------------------------------------------------------ */

function leerSesiones() {
  try {
    return JSON.parse(localStorage.getItem(LLAVE_SESIONES)) || [];
  } catch (error) {
    return [];   // si el cajón quedó ilegible, arrancamos de cero antes que romper
  }
}

function guardarSesion(sesion) {
  const todas = leerSesiones();
  todas.unshift(sesion);                                     // la más nueva primero
  localStorage.setItem(LLAVE_SESIONES, JSON.stringify(todas));
}

/* Cada pocos segundos se guarda un borrador. Si se cierra el navegador
   en el minuto 18, no perdiste nada. */
setInterval(() => {
  if (latido && $("escritura").value.trim()) {
    localStorage.setItem(LLAVE_BORRADOR, JSON.stringify({
      consigna: sueno,
      texto: $("escritura").value
    }));
  }
}, 4000);


/* ------------------------------------------------------------
   8 · EL ARCHIVO
   Lo que ya soñaste.
   ------------------------------------------------------------ */

function fechaLegible(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" }) +
         " · " + d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

function dibujarArchivo() {
  const sesiones = leerSesiones();
  const donde = $("lista-archivo");
  donde.textContent = "";                 // vaciar antes de redibujar

  $("archivo").classList.toggle("oculto", sesiones.length === 0);
  $("cuenta-archivo").textContent = sesiones.length === 1
    ? "1 noche"
    : sesiones.length + " noches";

  sesiones.forEach((s) => {
    const entrada = document.createElement("article");
    entrada.className = "entrada";

    const fecha = document.createElement("p");
    fecha.className = "entrada-fecha";
    fecha.textContent = fechaLegible(s.fecha) + " · " + s.tecnica;

    const consigna = document.createElement("p");
    consigna.className = "entrada-consigna";
    consigna.textContent = s.consigna;

    const texto = document.createElement("p");
    texto.className = "entrada-texto";
    texto.textContent = s.texto;

    /* Se usa textContent y no innerHTML a propósito: así lo que
       escribiste se muestra tal cual, aunque tenga signos raros. */
    entrada.append(fecha, consigna, texto);
    donde.append(entrada);
  });
}


/* ------------------------------------------------------------
   9 · SACARLO DE ACÁ
   Descargar en Markdown y copiar al portapapeles. Es lo que evita
   que tus cuentos queden presos en el navegador.
   ------------------------------------------------------------ */

function comoTexto(s) {
  return "# " + s.consigna + "\n\n" +
         "*" + s.tecnica + (s.restriccion ? " · " + s.restriccion : "") + "*  \n" +
         "*" + fechaLegible(s.fecha) + " · " + s.minutos + " minutos*\n\n" +
         "---\n\n" + s.texto + "\n";
}

/* Un nombre de archivo decente: 2026-08-22-binomio-fantastico.md */
function nombreDeArchivo(s) {
  const dia = s.fecha.slice(0, 10);
  const apodo = s.tecnica
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // saca los acentos
    .toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return dia + "-" + apodo + ".md";
}

function descargar(nombre, contenido) {
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(new Blob([contenido], { type: "text/markdown" }));
  enlace.download = nombre;
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}


/* ------------------------------------------------------------
   10 · LOS BOTONES
   Aquí se conecta cada botón de la página con su función.
   ------------------------------------------------------------ */

$("boton-dormir").addEventListener("click", () => dormir(false));
$("boton-otro-sueno").addEventListener("click", () => dormir(true));
$("boton-escribir").addEventListener("click", escribir);
$("boton-cerrar").addEventListener("click", () => cerrar(false));
$("boton-otra-noche").addEventListener("click", () => {
  cambios = 0;                     // noche nueva, cinco sueños nuevos
  mostrar("umbral");
  dibujarCielo();
actualizarUmbral();
});

$("boton-descargar").addEventListener("click", () => {
  const ultima = leerSesiones()[0];
  if (ultima) descargar(nombreDeArchivo(ultima), comoTexto(ultima));
});

$("boton-copiar").addEventListener("click", async (evento) => {
  const ultima = leerSesiones()[0];
  if (!ultima) return;
  await navigator.clipboard.writeText(ultima.texto);
  const boton = evento.currentTarget;
  boton.textContent = "copiado";
  setTimeout(() => { boton.textContent = "copiar"; }, 2000);
});

$("boton-descargar-todo").addEventListener("click", () => {
  const todas = leerSesiones();
  if (!todas.length) return;
  descargar("cuarto-oscuro-completo.md", todas.map(comoTexto).join("\n\n\n"));
});

$("boton-ver-archivo").addEventListener("click", () => {
  dibujarArchivo();
  mostrar("pantalla-cierre");
  $("cierre-titulo").textContent = "Lo que ya soñaste.";
  $("cierre-resumen").textContent = "";
  $("acciones-cierre").classList.add("oculto");
});


/* ------------------------------------------------------------
   11 · ARRANQUE
   ------------------------------------------------------------ */

/* ------------------------------------------------------------
   11 bis · EL CIELO
   Se dibuja una vez, al cargar la página. Cada estrella recibe su
   posición, su tamaño y su brillo al azar; la mitad además titila,
   con su propio ritmo y su propio retraso, para que nunca parpadeen
   todas juntas. Ninguna noche se ve igual a la anterior.
   ------------------------------------------------------------ */

function dibujarCielo() {
  const cielo = $("cielo");
  for (let i = 0; i < ESTRELLAS; i++) {
    const estrella = document.createElement("span");
    estrella.className = "estrella";

    estrella.style.left = (Math.random() * 100).toFixed(2) + "%";
    estrella.style.top = (Math.random() * 100).toFixed(2) + "%";

    const tamano = Math.random() < 0.88 ? 1 : 2;   // casi todas del tamaño mínimo
    estrella.style.width = tamano + "px";
    estrella.style.height = tamano + "px";

    estrella.style.setProperty("--brillo", (0.1 + Math.random() * 0.38).toFixed(2));

    if (Math.random() < 0.5) {
      estrella.style.setProperty("--ritmo", (4 + Math.random() * 7).toFixed(1) + "s");
      estrella.style.animationDelay = (Math.random() * 9).toFixed(1) + "s";
      estrella.classList.add("titila");
    }

    cielo.append(estrella);
  }
}


function actualizarUmbral() {
  const cuantas = leerSesiones().length;
  $("boton-ver-archivo").classList.toggle("oculto", cuantas === 0);
  $("boton-ver-archivo").textContent = cuantas === 1
    ? "1 noche anterior"
    : cuantas + " noches anteriores";
}

dibujarCielo();
actualizarUmbral();
