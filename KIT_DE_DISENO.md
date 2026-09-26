# Kit de Diseño Marco

**La regla de diseño de todo el ecosistema.** Acordada con el dueño el
24/09/2026 y **rehecha el 26/09/2026** a pedido suyo: de las once familias
sólo le gustaban Encuadre (Marketing) y Monitor (Pulso); las otras diez se
borraron. Y pidió lo que faltaba: **movimiento**. Cada kit tiene ahora una
animación permanente propia, además de la estructura, las letras y la paleta.

**El kit es un sistema en sí:** `C:\axis-human\kit` («Kit Marco»). Muestra los
seis kits vivos sobre **las mismas tres pantallas** (Inicio, Personas,
Monitor), con el menú donde va en cada uno, y se le enseña al cliente para que
elija. Lo elegido se imprime en un sistema con un comando (abajo).

> Reemplaza a «Axis Gov v1.31 es la barra visual». El `v0.1.0` de este paquete
> queda como base técnica de los sistemas viejos hasta que se migren.

## Por qué existe

En la primera demo de Marketing a un cliente (Sonríe Pilar, 24/09/2026) lo
primero que preguntó fue **«¿eso lo hiciste con Claude?»**. Los sistemas
parecían «una planilla de Excel linda», y todos iguales. El kit existe para
que cada sistema se sienta **vivo** y **propio**, sin que se note la plantilla,
y que eso se pueda repetir y ofrecer.

**Lección de Pulso (25/09):** las opciones que salen del mismo molde se
parecen; lo que destraba a un cliente (y al dueño) es ver **estilos de verdad
distintos sobre la misma pantalla**. Por eso el catálogo muestra la misma
portada seis veces.

## Las tres capas

| Capa | Qué es | Se comparte |
|---|---|---|
| **1. ADN Marco** | El isotipo (cuatro escuadras que encuadran un punto), el punto que late cuando algo pide atención, el lima como **relleno** y nunca como texto, los rótulos en monoespaciada, la línea de pulso, y el **vocabulario `k-*`** con el que se escriben las pantallas (`kit/src/base.css`). | En todos, sin cambios |
| **2. Kit** | Estructura (dónde va el menú), letras, paleta, y **un movimiento propio que no para**. | Entre los sistemas del mismo kit |
| **3. Firma** | Color propio, el vocabulario del rubro y un elemento que sólo tiene ese sistema. | Nunca |

## Los seis kits (26/09/2026)

Verlos vivos: `cd kit && npm run dev`. Cada uno cambia la **estructura** de la
pantalla, no sólo los colores. **Sólo Encuadre tiene menú lateral.**

| Kit | Para quién | Dónde va el menú | Letras | Paleta | Movimiento propio (permanente) | Estado |
|---|---|---|---|---|---|---|
| **Encuadre** | Administrar y decidir | Menú lateral oscuro; el cliente como nombre de la casa | Bricolage Grotesque · IBM Plex Sans · IBM Plex Mono | `#F4F5F1` `#17191A` `#C4E83E` | El «en vivo» respira; las escuadras del foco se cierran al entrar; las cifras cuentan; las filas llegan en cascada | **En producción** (Marketing, Pulso) |
| **Monitor** | Vigilar algo que se mueve | Sin lateral: barra superior fina con pestañas numeradas y reloj | Archivo · JetBrains Mono | `#101314` `#C4E83E` `#F5B84A` `#FF7A5C` | La rejilla del fondo se desplaza; cada línea de pulso **barre para siempre** con un cursor que la recorre; el «en vivo» late | La pantalla, en producción (Pulso); el kit entero, nuevo |
| **Vitral** | Equipos que coordinan y quieren verlo alegre | Sin lateral: barra superior de color con el menú adentro | Outfit · DM Sans | `#F1EEFB` `#6C4BE0` `#E6479A` `#1FA7C9` `#F0A21B` | El degradé de la barra se mueve; las tarjetas se levantan; los chips rebotan; el «en vivo» ondula | Nuevo (es el «colorido» que el dueño eligió en Pulso el 25/09, hecho kit) |
| **Cristal** | Mostrar tecnología: laboratorios, finanzas, dirección | Riel angosto de íconos a la izquierda; el nombre aparece al pasar | Space Grotesk · Inter · JetBrains Mono | `#0B0D14` `#5EE7D6` `#5B5BF6` `#C2418C` | Tres orbes de color derivan detrás del vidrio; los paneles entran deslizándose; el acento respira | Nuevo |
| **Diario** | Vender una experiencia o contar algo | Sin lateral: cabecera centrada como cabezal de diario, secciones bajo regla doble | Fraunces · Newsreader · IBM Plex Mono | `#FFFFFF` `#1B1A17` `#F4E04D` | La cinta de novedades corre; la regla se dibuja al entrar; las filas se imprimen línea a línea | Nuevo |
| **Legajo** | Tramitar: organismos, sindicatos, aduana | Sin lateral: las solapas de la carpeta son el menú; recorrido de pases arriba | Source Serif 4 · IBM Plex Mono | `#E6E9EC` `#1B2A41` `#B3261E` | Por el recorrido de pases viaja un punto; el sello se estampa al entrar; la hoja se apila al abrir una ficha | Nuevo |

### Qué kit le queda a cada sistema (propuesta; la decide el dueño, o el cliente)

| Sistema | Recomendado | Alternativa |
|---|---|---|
| Marketing · Pulso | Encuadre (hecho) | Vitral |
| Core · Broker · SINEP (legajos) | Encuadre | Cristal (vista del dueño) |
| Gov · Union · Customs · SINEP (trámites y licencias) | Legajo | Encuadre |
| Freight · Table · Workshop · Pharma | Monitor | Vitral |
| Lab · Galénica · Collection | Cristal | Monitor |
| Glow · Stay · Library | Diario | Vitral |
| School · Campus · Clinic | Vitral | Diario |

**Excepción permitida:** una pantalla operativa puede tomar otro kit dentro de
un sistema (las fichadas de SINEP en Monitor, la mesa de entradas de Gov en
Legajo). El resto del sistema no cambia.

## Cómo se imprime un kit en un sistema

```
node scripts/aplicar-kit.cjs --sistema clinic --kit vitral
node scripts/aplicar-kit.cjs --listar
node scripts/aplicar-kit.cjs --probar
```

El script (idempotente; salidas OK / FALLÓ / NO PUDE PROBAR) copia a
`<sistema>/src/kit/` el ADN (`base.css`), el kit (`kit.css`), su `Armazon.jsx`
y las piezas (`Isotipo`, `Icono`, `Pulso`, `Contador`), carga las letras y pone
`data-kit` en `index.html`. **Cambiar de kit es correrlo con otra clave.**

Lo que queda a mano, en este orden, porque es diseño y no copia:

1. Importar `kit/base.css` y `kit/kit.css`; envolver las rutas con el
   `Armazon` en lugar del Layout viejo.
2. **Una pantalla piloto** (la portada) rehecha con el vocabulario `k-*`, en
   una rama, y **el dueño la aprueba antes de seguir** (lección de Pulso: se
   migró todo de una y hubo que volver).
3. Pantalla por pantalla, con el checklist de abajo, sumando cada una al
   guardián del sistema.
4. Manual de uso al día.

## El vocabulario (lo que una pantalla puede usar)

Tokens: `--fondo --superficie --superficie-2 --borde --texto --texto-tenue
--acento --acento-texto --acento-sobre --tinta --tinta-sobre --ok --aviso
--peligro --radio --titulos --cuerpo --mono`.

Clases: `.k-app .k-contenido .k-pantalla .k-cabecera .k-titulo .k-rotulo
.k-num .k-tenue .k-btn .k-btn-primario .k-foco .k-foco-titulo .k-tira
.k-filas .k-fila .k-lista-y-ficha .k-panel .k-chip .k-estado .k-pistas
.k-pista .k-punto(.late) .k-cambio .k-cascada .k-vacio`.

Una pantalla **no usa clases de un kit** (`enc-`, `mon-`, `vit-`, `cri-`,
`dia-`, `leg-`): esas son del armazón. El guardián lo mide.

## Prohibido por defecto (lo que delata la plantilla)

- Selector de empresa o de equipo arriba del menú. El cliente va como nombre de la casa.
- Grilla de indicadores con número gigante arriba de todo.
- Ícono de línea dentro de un cuadradito de color.
- Tarjetas con sombra suave y bordes redondeados **para todo** (Vitral las usa a propósito, y es su identidad; en los otros cinco, no).
- Un párrafo explicando cada pantalla. Para eso está «Ayuda de esta pantalla».
- Fechas crudas donde «hace 2 semanas» dice más.
- Pastillas de colores saturados para los estados: van con punto y texto.
- **Una pantalla quieta.** Algo tiene que moverse siempre y **decir algo**: el en vivo, el pulso, la cinta, el pase. Movimiento que no informa, no.

## Obligatorio antes de dar por hecha una pantalla

- [ ] Empieza por lo que hay que **hacer**, como tarea y en el vocabulario del rubro, con el botón que lo resuelve.
- [ ] Está **viva** (Realtime o recarga cada minuto y al volver); lo que cambia parpadea una vez (`.k-cambio`).
- [ ] Dice el tiempo como una persona, con la fecha exacta en el `title`.
- [ ] Muestra quién hizo qué; el sello lo pone la base.
- [ ] La ficha se abre al costado (`.k-panel`) y no tapa la lista.
- [ ] Contraste medido contra el fondo más oscuro donde se usa el color. El lima nunca como texto sobre claro.
- [ ] Respeta `prefers-reduced-motion` (lo hace `base.css`; no se pisa).
- [ ] Sumada al guardián del sistema.

## El guardián del kit

`kit/src/lib/regla-kit.test.js` (53 pruebas el 26/09/2026). Mide, leyendo los
archivos, que cada kit: existe con sus tres archivos y está en el registro;
tiene **todas** sus reglas bajo `[data-kit]`; define todos los tokens; viste
las clases del vocabulario; tiene al menos una animación `infinite` propia; sus
keyframes llevan su prefijo; su armazón lleva menú, casa, isotipo y
`aria-current`; y que las pantallas no usan clases de ningún kit. Corre en el
CI del repo `mendo2211/marco-kit`.

## Cómo se hace «vivo» (receta probada en Marketing)

1. Realtime en la base por migración: `alter publication supabase_realtime add table <esquema>.<tabla>`. Respeta la RLS.
2. `useEnVivo(tablas, clienteId, alCambiar)` (`marketing/src/lib/enVivo.js`): recarga con 900 ms de demora; devuelve si está conectado.
3. Sello de autoría por trigger (`auth.uid()`), probado en una sonda SQL.
4. Recarga silenciosa que no pierde la selección y marca sólo lo que cambió.
5. Tiempo humano: `marketing/src/lib/tiempo.js`. Una fecha `AAAA-MM-DD` se lee local, no en UTC.

## Historia

- 24/09/2026: tres familias (Encuadre, Consultorio, Sala de control). Piloto Marketing en Encuadre, a producción esa noche.
- 25/09/2026: once familias (A–K) más L Monitor y M Mesa de luz; Pulso migrado entero a Encuadre + Monitor.
- **26/09/2026: seis kits con movimiento.** Se borraron Consultorio, Sala de control, Cuaderno, Expediente, Comanda, Obra, Revista, Carta, Instrumento y Diálogo (lo aprovechable de Expediente y Revista quedó en Legajo y Diario; Mesa de luz sigue siendo una pantalla de Pulso, no un kit). Las maquetas viejas están en `_archivo/kit-familias-2026-09-25/`.
