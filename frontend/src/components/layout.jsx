export default function Layout({ current, onNavigate, title, subtitle, children }) {
  const items = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "orders", label: "Pedidos", icon: "🧾" },
    { id: "catalog", label: "Catálogo", icon: "📦" },
    { id: "search", label: "Búsqueda", icon: "🔎" },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-badge" />
          <div>
            <div className="brand-title">Sistema Arquitectura</div>
            <div className="brand-sub">Sprint 1 — UI + Gateway</div>
          </div>
        </div>

        <nav className="nav">
          {items.map((it) => (
            <button
              key={it.id}
              className={`nav-item ${current === it.id ? "active" : ""}`}
              onClick={() => onNavigate(it.id)}
              type="button"
              aria-label={`Navegar a ${it.label}`}
              aria-current={current === it.id ? "page" : undefined}
            >
              <span aria-hidden="true">{it.icon}</span>
              <span>{it.label}</span>
            </button>
          ))}
        </nav>

        <div className="card" style={{ marginTop: "auto" }}>
          <h3 className="h3">Estado Sprint 1</h3>
          <div className="small">
            UI lista. Gateway listo. Servicios y Lambda: próximos sprints.
          </div>
          <div className="row" style={{ marginTop: "var(--space-3)" }}>
            <span className="badge ok">✅ Front</span>
            <span className="badge ok">✅ Gateway</span>
            <span className="badge warn">⏳ Services</span>
            <span className="badge warn">⏳ Lambda</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="h1">{title}</h1>
            <p className="p">{subtitle}</p>
          </div>
          <div className="row">
            <span className="badge">localhost</span>
            <span className="badge">Gateway :8080</span>
            <span className="badge">Front :5173</span>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
