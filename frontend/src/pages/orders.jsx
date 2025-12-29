const mockOrders = [
  { id: 101, customerName: "Cliente A", status: "CREATED", total: 12.5 },
  { id: 102, customerName: "Cliente B", status: "NOTIFIED", total: 31.0 },
  { id: 103, customerName: "Cliente C", status: "CREATED", total: 7.99 },
];

function StatusBadge({ status }) {
  const cls = status === "NOTIFIED" ? "ok" : "warn";
  return <span className={`badge ${cls}`}>{status}</span>;
}

export default function Orders() {
  return (
    <div className="grid">
      <section className="card" style={{ gridColumn: "span 5" }}>
        <h3 className="h3">Crear pedido</h3>
        <p className="small">Diseño listo. En Sprint 2 se conecta al API real.</p>

        <div style={{ marginTop: "var(--space-4)", display: "grid", gap: "var(--space-4)" }}>
          <div>
            <label htmlFor="customer-name" className="small" style={{ display: "block", marginBottom: "var(--space-2)", color: "var(--text)" }}>
              Nombre del cliente
            </label>
            <input 
              id="customer-name"
              className="input" 
              placeholder="Ej: Martín Jiménez"
              aria-label="Nombre del cliente"
            />
          </div>

          <div className="row">
            <button className="btn primary" type="button">
              Crear pedido
            </button>
            <button className="btn secondary" type="button">
              Refrescar
            </button>
          </div>

          <div className="small">
            Endpoint futuro: <code>/api/orders</code>
          </div>
        </div>
      </section>

      <section className="card" style={{ gridColumn: "span 7" }}>
        <h3 className="h3">Listado de pedidos</h3>
        <p className="small">Tabla UI con estados (CREATED / NOTIFIED).</p>

        <table className="table" style={{ marginTop: "var(--space-4)" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr key={o.id}>
                <td>#{o.id}</td>
                <td>{o.customerName}</td>
                <td>${o.total.toFixed(2)}</td>
                <td><StatusBadge status={o.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
