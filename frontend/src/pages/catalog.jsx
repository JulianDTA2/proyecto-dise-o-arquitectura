const mockProducts = [
  { id: 1, name: "Producto 1", stock: 12 },
  { id: 2, name: "Producto 2", stock: 3 },
  { id: 3, name: "Producto 3", stock: 0 },
];

function StockBadge({ stock }) {
  if (stock === 0) return <span className="badge bad">Sin stock</span>;
  if (stock <= 5) return <span className="badge warn">Bajo</span>;
  return <span className="badge ok">OK</span>;
}

export default function Catalog() {
  return (
    <div className="grid">
      <section className="card" style={{ gridColumn: "span 12" }}>
        <h3 className="h3">Catálogo</h3>
        <p className="small">UI lista para conectarse a <code>/api/catalog/products</code>.</p>

        <div className="row" style={{ marginTop: "var(--space-4)" }}>
          <input 
            className="input" 
            placeholder="Filtrar por nombre (UI)" 
            style={{ maxWidth: "400px" }}
            aria-label="Filtrar productos"
          />
          <button className="btn secondary" type="button">
            Refrescar
          </button>
        </div>

        <table className="table" style={{ marginTop: "var(--space-4)" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.stock}</td>
                <td><StockBadge stock={p.stock} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
