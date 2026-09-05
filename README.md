# El cuarto a oscuras

Un cuarto donde llega una consigna de escritura que **no elegiste**, y después
tienes veinte minutos para escribirla.

No hay menú ni categorías. Entras, aprietas **abre un sueño**, y lo que aparece
es lo que hay. Puedes cambiarlo, pero solo cinco veces por noche. Como acostarse
sin saber qué se va a soñar: la emoción no está en el resultado, está en el
segundo anterior.

Hecho por Paula en el Taller Anfibia, agosto de 2026.

---

## Por qué existe

Escribo cuentos, pero casi nunca me siento a escribir. El problema nunca fueron
las ganas: era la hoja en blanco y los veinte minutos sueltos que no sabía cómo
usar. Probé los dados y no me sirvieron — azar sin peso. Tengo *Gramática de la
fantasía* de Rodari marcado hace años y nunca hice los ejercicios.

Esto hace los ejercicios por mí, uno por vez, sin tener que releer el libro.

---

## Cómo se usa

1. **Abre un sueño** — llega una consigna. Emerge de a poco: espérala.
2. Si no te sirve, **otro sueño**. Tienes cinco por noche y el botón te dice
   cuántos quedan. El límite es a propósito: sin límite volverías a apretar hasta
   que apareciera una consigna cómoda, y las cómodas no sirven para escribir.
3. **Escribir veinte minutos** — se enciende la hoja y arranca el reloj. La línea
   ámbar de arriba se va acortando: es una vela, no una cuenta regresiva.
4. Escribes. En los últimos dos minutos el reloj se enciende, sin alarmas.
5. **Cerrar la hoja** — o se cierra sola cuando se acaba el tiempo. Se guarda lo
   que escribiste y puedes **descargarlo** o **copiarlo**.
6. Abajo queda **el archivo**: todas las noches anteriores.

---

## Las técnicas

Cada consigna se arma con una de diez técnicas. Nueve vienen de algún lado y una
es puro azar tipográfico:

| Técnica | De dónde sale |
|---|---|
| binomio fantástico · hipótesis fantástica · prefijo arbitrario · error creativo · la piedra en el estanque · ensalada de cuentos | Gianni Rodari, *Gramática de la fantasía* |
| cartas de Propp | Vladimir Propp, *Morfología del cuento* |
| lugar imaginario | el registro de catálogo de la *Guía de lugares imaginarios* |
| punto de vista desplazado · el último renglón | ejercicios de taller |

Seis de cada diez veces se suma una **restricción formal** a la manera de
Oulipo: escribir sin la letra «a», en una sola oración, sin adjetivos, sin usar
la palabra «yo». Los límites son buenos para la creatividad; por eso están.

En total, **46.718.975 sueños posibles**. El número lo calcula el propio
programa: si agregas palabras, sube.

---

## Los archivos

| Archivo | Qué hace |
|---|---|
| `index.html` | El esqueleto: qué elementos existen en la página. Cuatro pantallas — umbral, consigna, hoja, cierre — y se muestra una sola por vez. |
| `estilos.css` | Toda la estética: los colores, las tipografías, el ritmo de las apariciones. Si quieres cambiar cómo se ve algo, se cambia aquí. |
| `consignas.js` | **El sobre cerrado.** Las palabras y las diez técnicas. |
| `estudio.js` | La maquinaria: pasar de pantalla en pantalla, el cielo, el reloj, guardar, el archivo. |

### Sobre `consignas.js`

Ese archivo es la sorpresa. Mientras más lo leas, menos te va a sorprender la
pieza. Está escrito para poder **agregarle** cosas dentro de seis meses, no para
leerlo hoy.

Si quieres sumar material: busca la lista que corresponda (`sustantivos`,
`lugares`, `personajes`, `acciones`, `situaciones`, `finales`, `restricciones`),
agrega un renglón entre comillas con una coma al final, y listo. El resto del
programa se entera solo, y el número de sueños posibles sube.

---

## Dónde queda lo que escribes

En `localStorage`: un cajón que el navegador reserva para esta página y nada más.
**No se envía a ningún servidor. No lo ve nadie más que tú.**

La contra es real y conviene saberla:

- Vive **solo en ese navegador y en esa computadora**. Lo que escribas en la
  computadora no aparece en el celular.
- Si borras los datos de navegación, **se va**.
- En modo incógnito no se guarda nada.

Por eso están los botones de **descargar**. Bajan un archivo `.md` que puedes
guardar en la carpeta de Google Drive de tu Mac
(`~/Library/CloudStorage/GoogleDrive-…`) y queda sincronizado solo.

**Costumbre recomendada:** descargar todo cada tanto. Es un solo clic.

---

## Decisiones de diseño

Por si dentro de seis meses no me acuerdo por qué está así:

- **El fondo es azul (`#0a0f16`), no negro.** Negro puro es una pantalla apagada;
  ese azul es una habitación con la persiana baja.
- **El texto es crema (`#e8e4dc`), no blanco.** Blanco puro sobre oscuro vibra y
  cansa la vista, y aquí se está veinte minutos.
- **Las estrellas son pocas y tenues**, del color de la tinta y no blancas, de un
  píxel casi siempre. Solo la mitad titila, cada una con su ritmo y su retraso,
  para que nunca parpadeen todas juntas. Las sortea el programa al cargar: no hay
  dos noches iguales.
- **Con la luz encendida no se ven las estrellas.** El cielo se apaga cuando se
  abre la hoja.
- **La consigna llega a oscuras; la hoja se enciende.** El cambio de luz es el
  cambio de tarea: soñar y trabajar no se hacen igual.
- **Un solo acento, ámbar.** Es el velador. Aparece en tres lugares y en ninguno más.
- **La primera consigna emerge despacio; las siguientes, rápido.** La primera vez
  la vista se está acomodando a la oscuridad; después ya está acomodada.
- **Cinco sueños por noche.** La escasez es lo que separa una herramienta de un rito.

---

## Limitaciones conocidas

- El archivo no tiene buscador ni permite borrar entradas todavía.
- La duración está fija en veinte minutos. Se cambia en `estudio.js`, arriba de
  todo: `const MINUTOS = 20`. Al lado están `SUENOS_POR_NOCHE` y `ESTRELLAS`.
- Abierto con doble clic desde el escritorio (`file://`), algunos navegadores no
  dejan guardar en `localStorage`. Publicado en internet funciona siempre.
