export default function Search() {
  return (
    <div className="grid">
      <section className="card" style={{ gridColumn: "span 12" }}>
        <h3 className="h3">Búsqueda (Sprint 3)</h3>
        <p className="small">
          Pantalla lista para conectar a Elasticsearch vía API (por Gateway).
        </p>

        <div className="row" style={{ marginTop: "var(--space-4)" }}>
          <input 
            className="input" 
            placeholder="Buscar productos o pedidos..." 
            style={{ maxWidth: "500px" }}
            aria-label="Buscar"
          />
          <button className="btn primary" type="button">
            Buscar
          </button>
        </div>

        <div className="small" style={{ marginTop: "var(--space-4)" }}>
          Endpoint futuro: <code>/api/catalog/search?q=</code> o <code>/api/orders/search?q=</code>
        </div>
      </section>
    </div>
  );
}
