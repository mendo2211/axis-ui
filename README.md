# @axis-human/ui

Design system compartido del ecosistema Axis Human. Extraído de Axis Gov v1.31.

## Instalación

En cada sistema:

```bash
npm install github:mendo2211/axis-ui#v0.1.0
```

## Uso

En `src/main.jsx` (una sola vez):

```js
import '@axis-human/ui/global.css'
```

Después, en cualquier componente:

```jsx
import { Btn, Input, Card, Badge, Spinner, Empty, Logo, useThemeToggle } from '@axis-human/ui'

export function MiPantalla() {
  const toggleTheme = useThemeToggle()
  return (
    <Card>
      <Logo name="axis" sub="core" />
      <Input label="Email" />
      <Btn variant="primary" size="md">Guardar</Btn>
    </Card>
  )
}
```

## Override del accent por sistema

Cada sistema puede definir su propio accent en su CSS local, posterior al import:

```css
:root, [data-theme='dark'] { --accent: #5F9BD4; --accent-on: #FFFFFF; }
[data-theme='light']        { --accent: #1E5A8A; --accent-on: #FFFFFF; }
```

## Componentes incluidos

- `Logo` — nombre + sub con separador "/"
- `Btn` — sm/md/lg × ghost/primary/subtle/danger
- `Input` — con label/hint/error
- `Card` — surface con border
- `Badge` — neutral/accent/ok/err/warn/info
- `Spinner` — loader con label
- `Empty` — empty state con action
- `useThemeToggle` — hook que alterna dark/light vía `[data-theme]`

## Responsive mobile (incluido en global.css)

- Botones con `data-axis-btn` crecen a 36/42/48px (targets táctiles)
- Inputs con `data-axis-input` a 16px (anti-zoom iOS)
- Grids `repeat(N, 1fr)` colapsan a 1 columna
- Modales `position: fixed` se ajustan a viewport

## Versionado

Cada cambio breaking → bump major.
Adiciones compatibles → bump minor.
Fixes → bump patch.
