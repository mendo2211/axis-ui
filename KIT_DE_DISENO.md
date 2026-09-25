# Kit de Diseño Marco

**La regla de diseño de todo el ecosistema.** Acordada con el dueño el
24/09/2026. Cada sistema nuevo o rediseñado la sigue; no hace falta volver a
consultarla. El primer sistema hecho entero con el kit es **Marketing**
(`C:\axis-human\marketing`): es la referencia viva y de ahí se copian las
piezas.

> Este archivo reemplaza a «Axis Gov v1.31 es la barra visual» como criterio.
> El `v0.1.0` de este paquete (tema y componentes de Gov) queda como base
> técnica de los sistemas viejos hasta que se migren; no se usa para
> pantallas nuevas.

## Por qué existe

En la primera demo de Marketing a un cliente (Sonríe Pilar, 24/09/2026) lo
primero que preguntó fue **«¿eso lo hiciste con Claude?»**, y lo reconoció por
el selector de empresa arriba del menú. El dueño lo resumió así: los sistemas
parecían «una planilla de Excel linda», y además eran todos iguales. El kit
existe para que cada sistema se sienta **vivo** y **propio**, sin que se note
la plantilla, y que eso se pueda repetir.

## Las tres capas

| Capa | Qué es | Se comparte |
|---|---|---|
| **1. ADN Marco** | El isotipo (cuatro escuadras que encuadran un punto), el punto lima que late cuando algo pide atención, el lima como **relleno** y nunca como texto, los rótulos en monoespaciada. | En todos los sistemas, sin cambios |
| **2. Familia** | Letras, densidad, tema y forma de la portada, según el **tipo de trabajo**. | Entre los sistemas de la misma familia |
| **3. Firma** | Color propio, el vocabulario del rubro y un elemento que sólo tiene ese sistema. | Nunca |

## Las familias (once + dos del 25/09)

Ampliado el 25/09/2026 a pedido del dueño: «que no tengan todos layout
izquierdo y contenido a la derecha». Cada familia cambia la **estructura** de
la pantalla, no sólo los colores. **Sólo A usa menú lateral.** Maquetas de
las once: artifact «Familias Marco» (https://claude.ai/artifact/V8LoGk3QBQaQrXNWDYdfeF).
Primeras tres, con más detalle: «Caminos de diseño Marco»
(https://claude.ai/artifact/KN1G9eGrq7Dem2EP5JKHNU).

Cómo elegir: ¿qué hace todo el día quien lo usa? Administrar y decidir (A),
atender personas con turnos (B), vigilar algo que se mueve (C), enseñar (D),
tramitar (E), despachar pedidos en un mostrador (F), reparar en un taller
(G), vender una experiencia (H), moverse en un territorio (I), medir (J) o
preguntar sin aprender el sistema (K), seguir una cartera de proyectos que se mueven (L) o revisar pruebas (M).

| | Familia | Estructura de la pantalla | Letras | Paleta | Firma | Estado |
|---|---|---|---|---|---|---|
| A | **Encuadre** | Menú lateral oscuro con el cliente como «casa»; un foco encuadrado | Bricolage Grotesque · IBM Plex Sans · IBM Plex Mono | `#F4F5F1` `#17191A` `#C4E83E` `#DADDD5` | Foco con dos escuadras y el número en lima | **En producción (Marketing)** |
| B | **Consultorio** | Sin menú lateral: solapas arriba + tira de días; agenda y mensajes en dos columnas | Young Serif · IBM Plex Sans | `#E9F1EE` `#0F766E` `#1D2B28` | Turno actual «ahora»; mensajes en burbuja | Propuesta |
| C | **Sala de control** | Sin menú: mosaico de paneles a pantalla completa + barra de comandos abajo | Archivo 800 · JetBrains Mono | `#16181C` `#1C1F24` `#F5A524` | Registro de eventos con hora | Propuesta |
| D | **Cuaderno** | Doble página (clase / para hoy) + pestañas de colores en el borde derecho | Newsreader · Kalam (notas a mano) · IBM Plex Sans | `#FDFDFB` cuadriculado, `#1E2A3A`, `#2F5BB7`, resaltador `#FFE66D`, margen `#E0707A` | Margen rojo y resaltador amarillo | Nueva |
| E | **Expediente** | Una columna ancha como una hoja; recorrido de pases arriba; acciones como notas al margen | Source Serif 4 · IBM Plex Mono | `#E9ECEF` `#FFFFFF` `#1B2A41` sello `#B3261E` | Sello circular de goma con el estado; número de foja | Nueva |
| F | **Comanda** | Riel horizontal de tickets que se desliza + dock de 4 botones abajo (pantalla táctil) | Barlow Condensed · DM Mono | `#2B2D2F` `#FBFAF7` `#F2C14E` atrasado `#FFE9A8` | Borde dentado de papel térmico; minutos que corren | Nueva |
| G | **Obra** | Solapas grandes arriba + tablero de columnas a todo el ancho + cinta de avisos abajo | Big Shoulders Stencil · Barlow | `#F2F0EA` `#111111` `#FFC700` | Cinta de peligro sobre lo trabado | Nueva |
| H | **Revista** | Cabecera centrada con secciones debajo; el día como sumario con horas grandes + destacado | Gloock · Figtree | `#FFFFFF` `#3A1F3D` `#B25C74` `#F6E4E7` | Letra capital; horas en números de revista | Nueva |
| I | **Carta** | Mapa a pantalla completa; buscador flotante arriba y hoja deslizable con la lista abajo | IBM Plex Sans Condensed · Martian Mono | `#EAF1EC` `#0E4D64` rutas `#E4572E` | Curvas de nivel; rutas punteadas | Nueva |
| J | **Instrumento** | Cabecera de equipo con modos + banda de lecturas con tolerancia + un gráfico ancho | Red Hat Display · Red Hat Mono | `#F2F6F6` `#0F2A2E` `#00A3AD` fuera `#C8105A` | Franja de tolerancia con aguja bajo cada valor | Nueva |
| K | **Diálogo** | Una columna angosta al centro: pregunta, respuesta con fuente y acciones; caja abajo | Literata · IBM Plex Mono | `#F7F7F4` `#1C1C1A` `#C4E83E` | Cada número dice de qué tabla y fecha sale | Nueva |
| L | **Monitor** | Una pista por proyecto a todo el ancho, como un monitor de varios pacientes: la línea late con la actividad de 14 días y plana es parado; foco arriba y ficha al costado | Del sistema · monospaciada para rótulos | monitor `#101314` en los tres temas, trazos `#C4E83E` `#F5B84A` `#FF7A5C` | La línea de pulso que se aplana | **En producción (Pulso, 25/09): todo el sistema** |
| M | **Mesa de luz** | La evidencia primero, como una hoja de contactos: miniaturas con sello «aceptada / devuelta» y el hueco punteado de lo que falta; en el celular se desliza para aceptar o devolver | Del sistema · monospaciada para sellos | papel `#F3F1EC`, sellos `#2E7D32` `#B3261E` | Sello de goma torcido; hueco punteado de lo que falta | **En producción (Pulso: /revisar, 25/09)** |

### A · Encuadre — el detalle, porque es la que está construida
- **Tema:** claro. Menú lateral oscuro (`#17191A`), con el activo marcado por un filete lima.
- **Forma:** cada pantalla encuadra **una** cosa con las escuadras (`.foco`): lo que hay que hacer ahora. El resto va en filas densas (`.filas`), tiras de números (`.tira`) y tablas con filete. Esquinas de 3 px, sin sombras. El botón principal es tinta; el lima se reserva para el foco.

### Qué familia le queda a cada sistema (propuesta; la decide el dueño)

| Sistema | Recomendada | Alternativa |
|---|---|---|
| Marketing | A Encuadre (hecha) | — |
| Clinic | B Consultorio | H Revista |
| Glow | H Revista | B Consultorio |
| Stay | H Revista | I Carta |
| School · Campus | D Cuaderno | B Consultorio |
| Library | D Cuaderno | A Encuadre |
| Gov | E Expediente | A Encuadre |
| SINEP | A Encuadre (legajos) | E Expediente (trámites y licencias) |
| Union | E Expediente | K Diálogo |
| Customs | E Expediente | I Carta |
| Table | F Comanda | C Sala de control |
| Pharma | F Comanda (mostrador) | J Instrumento (lotes y vencimientos) |
| Collection | K Diálogo | F Comanda |
| Workshop | G Obra | F Comanda |
| Freight | I Carta | C Sala de control (despacho) |
| Lab · Galénica | J Instrumento | C Sala de control |
| Core | A Encuadre | K Diálogo (vista del dueño) |
| Broker | A Encuadre | E Expediente |
| Pulso | L Monitor (elegida por el dueño el 25/09; la pantalla de revisar evidencia va en M Mesa de luz) | K Diálogo (vista del dueño, cuando haya IA) |

**Excepción permitida:** una pantalla operativa puede tomar otra familia
dentro de un sistema (las fichadas de SINEP en C, la mesa de entradas de Gov
en E). El resto del sistema no cambia.

**Al construir una familia nueva por primera vez:** las piezas de A
(`Encabezado`, `Tira`, `Panel`, `useEnVivo`, `tiempo.js`) sirven igual; lo que
cambia es el armazón (`Layout.jsx`: solapas, dock, mapa, riel…) y los tokens.
Hay que escribir su armazón como pieza reutilizable, porque el segundo
sistema de la misma familia lo va a copiar.

## Prohibido por defecto

Es lo que delata la plantilla:

- Selector de empresa o de equipo arriba del menú. El cliente va como **nombre de la casa**, junto al isotipo; el administrador general lo toca, o aprieta `/`, para cambiarlo.
- Grilla de indicadores con número gigante arriba de todo.
- Ícono de línea dentro de un cuadradito de color.
- Tarjetas con sombra suave y bordes redondeados para todo.
- Un párrafo explicando cada pantalla. Para eso está el manual, con el botón «Ayuda de esta pantalla».
- Fechas crudas como `10/09/2026` donde «hace 2 semanas» o «turno mañana» dicen más.
- Pastillas de colores saturados para los estados: van con punto y texto.

Si una pantalla necesita alguna de estas cosas, se justifica en un comentario arriba del componente.

## Obligatorio antes de dar por hecha una pantalla

- [ ] **Empieza por lo que hay que hacer**, dicho como tarea y con el vocabulario del rubro («Escribile a 11 personas que consultaron y no sacaron turno»), con el botón que lo resuelve. Si no hay nada accionable, no se inventa un foco.
- [ ] **Está viva:** se entera sola de los cambios (Realtime) o, como mínimo, se recarga cada minuto y al volver a la pestaña. Lo que cambia mientras mirás parpadea una vez (`.cambio`).
- [ ] **Dice el tiempo como una persona**, con la fecha exacta en el `title`.
- [ ] **Muestra quién hizo qué** cuando trabaja un equipo («Carla · hace 5 min»). El sello de autoría lo pone la base, nunca el navegador.
- [ ] **La ficha de un registro se abre al costado** (panel) y no tapa la lista.
- [ ] **Contraste medido** contra el fondo más oscuro donde se usa el color. El lima nunca va como color de texto sobre claro.
- [ ] **El guardián la cuida:** la pantalla está sumada a `REHECHAS` en `src/lib/__tests__/regla-diseno.test.js`.

## Cómo se hace «vivo» (receta probada en Marketing)

1. **Realtime en la base.** Por migración: `alter publication supabase_realtime add table <esquema>.<tabla>`. Realtime respeta la RLS: cada uno recibe sólo lo de su cliente. Ejemplo: `marketing/supabase/migrations/20260925002144_mkt_le_escribimos_y_tiempo_real.sql`.
2. **`useEnVivo(tablas, clienteId, alCambiar)`** (`marketing/src/lib/enVivo.js`): se suscribe filtrando por `cliente_id` y llama a la recarga con una demora de 900 ms, así una sincronización masiva recarga una sola vez. Devuelve si está conectado, para el punto «en vivo».
3. **Sello de autoría por trigger:** `new.le_escribio := auth.uid()` cuando cambia la fecha. El cliente sólo puede mover la fecha; queda probado en una sonda SQL.
4. **Recarga silenciosa:** no pierde la selección y marca con `.cambio` sólo las filas cuyo `updated_at` cambió.
5. **Tiempo humano:** `marketing/src/lib/tiempo.js` (`haceCuanto`, `cuandoViene`, `esHoy`). Una fecha `AAAA-MM-DD` se lee local, no en UTC, porque si no, a la noche se corre un día.

## Piezas para copiar (de `C:\axis-human\marketing`)

| Pieza | Archivo |
|---|---|
| Tokens, clases y animaciones | `src/theme.css`: `.foco`, `.punto.late`, `.tira`, `.filas`, `.chip`, `.panel`, `.barra-eleccion`, `.caudal`, `.cambio`, `--tinta`, `--titulos`, `--mono` |
| Letras y tema antes del primer pintado | `index.html` |
| Isotipo | `src/components/Icono.jsx` → `Isotipo` |
| Menú con el cliente como «casa» y la tecla `/` | `src/components/Layout.jsx` (`ElegirCliente`) |
| Encabezado, tira de números, panel lateral | `src/components/UI.jsx` → `Encabezado`, `Tira`, `Panel` |
| Interruptor, fichas, segmentado, vacío encuadrado | `src/components/Formulario.jsx` |
| En vivo y equipo | `src/lib/enVivo.js` → `useEnVivo`, `useEquipo` |
| Tiempo humano | `src/lib/tiempo.js` |
| Guardián de la regla | `src/lib/__tests__/regla-diseno.test.js` |
| Pantallas modelo | `src/modules/Dashboard.jsx` (foco del día), `OportunidadesPage.jsx` (cola de trabajo), `LeadsPage.jsx` (lista + ficha lateral), `EmbudoPage.jsx` (caudal) |

## Cómo llevar el kit a otro sistema (en este orden)

1. **Elegir la familia** con la tabla de arriba y definir la firma: un color, el vocabulario y un elemento propio.
2. **Base visual:** copiar tokens y clases a `theme.css` y cambiar las letras en `index.html`. Con esto, todo el sistema ya cambia de piel.
3. **Armazón:** el menú con la «casa» en lugar del selector, más la tecla `/`.
4. **Una pantalla piloto:** la portada, con el foco del día y en vivo. Se publica en una rama como vista previa y el dueño la aprueba antes de seguir.
5. **Pantalla por pantalla,** con el checklist. Sumar cada una al guardián.
6. **Manual de uso** al día (los textos dicen dónde está cada cosa).
7. **Rehacer las piezas comunes** en este paquete (`@axis-human/ui` v0.2) cuando haya dos sistemas en la misma familia. Recién ahí se extraen; antes, se copian.

## Trampas ya pisadas (para no repetirlas)

- **Vista previa en Vercel:** si el proyecto sólo tiene las variables `VITE_*` en Production, la vista previa de una rama falla el build (y está bien que falle). Hay dos salidas: publicar con `vercel build` + `vercel deploy --prebuilt` desde la máquina que tiene `.env`, o que el dueño cargue esas variables también para Preview.
- **Ver una pantalla sin iniciar sesión:** Claude no escribe contraseñas. Marketing tiene una muestra local con un Supabase de mentira (`vite.muestra.config.js` + `muestra.html` + `src/muestra.jsx`, excluidos en `.git/info/exclude`; la entrada `marketing-muestra` está en el `launch.json` de la raíz). El alias tiene que atrapar también `./supabase.js`, no sólo `lib/supabase.js`.
- **Pruebas con `vi.mock` del contexto de cliente:** vitest sube `vi.mock` antes que cualquier constante. Un ayudante tiene que ir **adentro** de la fábrica, no en una constante de arriba.
- **Una pieza común que usa el contexto de cliente** tiene que tolerar que no haya proveedor (`useClienteOpcional`), porque se monta también en pruebas y en pantallas públicas.
- **Hora en pruebas:** Node formatea «12:00 p. m.»; se fuerza `hour12: false`.
