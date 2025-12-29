# 🎨 Style Guide - Sistema Arquitectura

## Design Tokens

### Espaciado
```css
--space-1: 4px    /* micro gaps */
--space-2: 8px    /* small gaps */
--space-3: 12px   /* default gaps */
--space-4: 16px   /* medium gaps */
--space-5: 20px   /* large gaps */
--space-6: 24px   /* XL gaps */
--space-8: 32px   /* sections */
--space-10: 40px  /* major sections */
--space-12: 48px  /* page sections */
```

### Tipografía
```css
/* Font Sizes */
--font-size-xs: 12px    /* labels, badges */
--font-size-sm: 13px    /* secondary text */
--font-size-base: 14px  /* body text */
--font-size-md: 16px    /* emphasis */
--font-size-lg: 18px    /* h3 */
--font-size-xl: 20px    /* h2 */
--font-size-2xl: 24px   /* h1 */
--font-size-3xl: 32px   /* hero */

/* Line Heights */
--line-height-tight: 1.25    /* headings */
--line-height-normal: 1.5    /* body */
--line-height-relaxed: 1.625 /* paragraphs */

/* Font Weights */
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Colores
```css
/* Base */
--bg: #0b1220
--text: rgba(255,255,255,0.92)
--text-secondary: rgba(255,255,255,0.65)
--text-tertiary: rgba(255,255,255,0.45)

/* Surfaces */
--panel: rgba(255,255,255,0.06)
--panel-hover: rgba(255,255,255,0.08)
--panel-active: rgba(255,255,255,0.1)

/* Borders */
--border: rgba(255,255,255,0.12)
--border-subtle: rgba(255,255,255,0.08)

/* Accent */
--accent: #7c3aed
--accent-soft: rgba(124,58,237,0.12)
--accent-border: rgba(124,58,237,0.35)

/* Semantic */
--ok: #22c55e       (success/ready)
--warn: #f59e0b     (warning/pending)
--bad: #ef4444      (error/danger)
```

### Radii
```css
--radius-sm: 8px    /* small elements */
--radius-md: 12px   /* buttons, inputs */
--radius-lg: 16px   /* cards */
--radius-xl: 20px   /* sections */
--radius-full: 9999px /* badges, pills */
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.12)
--shadow-md: 0 4px 16px rgba(0,0,0,0.16)
--shadow-lg: 0 12px 32px rgba(0,0,0,0.24)
--shadow-focus: 0 0 0 3px rgba(124,58,237,0.35)
```

---

## Componentes

### Buttons
```jsx
<button className="btn">Default</button>
<button className="btn primary">Primary</button>
<button className="btn secondary">Secondary</button>
<button className="btn ghost">Ghost</button>
<button className="btn" disabled>Disabled</button>
```

**Estados:**
- `:hover` - elevación y background más claro
- `:focus-visible` - anillo de foco púrpura
- `:active` - sin transformación vertical
- `:disabled` - opacidad 50%, cursor not-allowed

### Inputs
```jsx
<input className="input" placeholder="Texto..." />
```

**Estados:**
- `:hover` - border más visible
- `:focus` - border accent + shadow
- `:disabled` - opacidad 50%

### Badges
```jsx
<span className="badge">Default</span>
<span className="badge ok">Success</span>
<span className="badge warn">Warning</span>
<span className="badge bad">Error</span>
```

**Uso:**
- Default: información neutral (puertos, URLs)
- `ok`: estado exitoso/listo
- `warn`: pendiente/en progreso
- `bad`: error/sin stock

### Cards
```jsx
<section className="card">
  <h3 className="h3">Título</h3>
  <p className="small">Descripción secundaria</p>
  <div className="row">
    {/* contenido */}
  </div>
</section>
```

### Tables
```jsx
<table className="table">
  <thead>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>
```

**Características:**
- Sticky header
- Hover state en filas
- Border collapse con radii

---

## Layout

### Grid System
```jsx
<div className="grid">
  <div style={{ gridColumn: "span 4" }}>1/3</div>
  <div style={{ gridColumn: "span 4" }}>1/3</div>
  <div style={{ gridColumn: "span 4" }}>1/3</div>
  <div style={{ gridColumn: "span 12" }}>Full width</div>
</div>
```

**Responsive:**
- Desktop (>900px): 12 columnas
- Mobile (<900px): 1 columna (auto-colapsa)

### Sidebar
- Width: 280px (desktop)
- Colapsable en mobile (horizontal nav)
- Sticky status card al final

---

## Tipografía

### Headings
```jsx
<h1 className="h1">Título Principal (24px)</h1>
<h2 className="h2">Subtítulo (20px)</h2>
<h3 className="h3">Sección (18px)</h3>
```

### Body Text
```jsx
<p className="p">Texto secundario (13px)</p>
<div className="small">Texto auxiliar (13px)</div>
```

### Code
```jsx
<code>/api/endpoint</code>
```

---

## Accesibilidad

### Focus States
Todos los elementos interactivos tienen:
- `outline: 2px solid var(--accent)` en `:focus-visible`
- Box-shadow púrpura para botones/inputs

### ARIA Labels
```jsx
<button aria-label="Descripción clara">
  <span aria-hidden="true">🔎</span>
</button>

<input aria-label="Campo de búsqueda" />
```

### Contraste
- Texto principal: rgba(255,255,255,0.92) sobre #0b1220 ✓
- Badges semánticos: colores con suficiente contraste ✓

---

## Responsive Breakpoints

### 900px (Tablet)
- Sidebar → horizontal nav bar
- Grid → 1 columna
- Topbar → vertical stack

### 600px (Mobile)
- Títulos más pequeños
- Padding reducido
- Badges más compactos

---

## Buenas Prácticas

1. **Usa tokens en lugar de valores hardcoded:**
   ```jsx
   ✅ style={{ marginTop: "var(--space-4)" }}
   ❌ style={{ marginTop: 16 }}
   ```

2. **Clases semánticas:**
   ```jsx
   ✅ <h3 className="h3">
   ❌ <h3 style={{ fontSize: 18 }}>
   ```

3. **Estados interactivos:**
   Todos los botones/inputs deben tener hover y focus visible

4. **Consistencia:**
   Usa las clases `.row` para flex layouts horizontales

5. **Accesibilidad:**
   - Labels para inputs
   - ARIA cuando sea necesario
   - Focus visible siempre

---

## Ejemplos de Uso

### Formulario
```jsx
<div style={{ display: "grid", gap: "var(--space-4)" }}>
  <div>
    <label htmlFor="name" className="small" style={{ display: "block", marginBottom: "var(--space-2)" }}>
      Nombre
    </label>
    <input id="name" className="input" placeholder="Ingresa tu nombre" />
  </div>
  
  <div className="row">
    <button className="btn primary">Guardar</button>
    <button className="btn secondary">Cancelar</button>
  </div>
</div>
```

### Status Display
```jsx
<div className="row">
  <span className="badge ok">✅ Completado</span>
  <span className="badge warn">⏳ En progreso</span>
  <span className="badge bad">❌ Error</span>
</div>
```

### Card con acción
```jsx
<section className="card">
  <h3 className="h3">Título de la Card</h3>
  <p className="small">Descripción breve del contenido</p>
  
  <div className="row" style={{ marginTop: "var(--space-4)" }}>
    <button className="btn primary">Acción Principal</button>
    <button className="btn ghost">Secundaria</button>
  </div>
</section>
```
