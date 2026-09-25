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

## Las tres familias

El criterio para elegir: quien lo usa, ¿administra papeles y decide (A),
atiende personas durante el día (B) o vigila algo que se mueve (C)?

### A · Encuadre — hecha y probada (Marketing)
- **Letras:** Bricolage Grotesque en los títulos, IBM Plex Sans para el texto, IBM Plex Mono para números y rótulos.
- **Tema:** claro. Fondo `#F4F5F1`, tinta `#17191A`, filetes `#DADDD5`. Menú lateral oscuro (`#17191A`), con el activo marcado por un filete lima.
- **Forma:** cada pantalla encuadra **una** cosa con las escuadras (`.foco`): lo que hay que hacer ahora. El resto va en filas densas (`.filas`), tiras de números (`.tira`) y tablas con filete. Esquinas de 3 px, sin sombras. El botón principal es tinta; el lima se reserva para el foco.
- **Para:** Marketing, Core, Broker, Collection, Customs, Union, SINEP (legajos), Gov.

### B · Consultorio — especificada, sin construir
- **Letras:** Young Serif en los títulos, IBM Plex Sans para el texto.
- **Tema:** claro y cálido (por ejemplo `#E9F1EE` con verde azulado `#0F766E` en Clinic). Superficies más redondeadas (10-14 px).
- **Forma:** la portada es **el día**. En una columna la agenda (turno actual marcado «ahora»); en la otra, los mensajes para mandar, en burbujas.
- **Para:** Clinic, Glow, Stay, School, Campus, Library, Pulso.

### C · Sala de control — especificada, sin construir
- **Letras:** Archivo (títulos en mayúscula, peso 800) y JetBrains Mono.
- **Tema:** oscuro (`#16181C`) con un color de alerta por sistema (ámbar `#F5A524` en Freight).
- **Forma:** densa. Lo que pasa **en vivo** va al centro, como un registro de eventos con hora; indicadores con una mini curva; atajos de teclado visibles.
- **Para:** Freight, Workshop, Table, Pharma, Lab, Galénica.
- **Excepción permitida:** una pantalla operativa dentro de un sistema A (las fichadas de SINEP, la mesa de entradas de Gov) puede usar la familia C. El resto del sistema no cambia.

Las maquetas de las tres están en el artifact «Caminos de diseño Marco» (https://claude.ai/artifact/KN1G9eGrq7Dem2EP5JKHNU).

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
