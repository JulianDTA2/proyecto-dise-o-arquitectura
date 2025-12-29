export default function Dashboard() {
  return (
    <div className="grid">
      <section className="card" style={{ gridColumn: "span 4" }}>
        <h3 className="h3">Pedidos</h3>
        <div className="small">Flujo base listo para conectar a /api/orders</div>
        <div className="row" style={{ marginTop: "var(--space-3)" }}>
          <span className="badge ok">Diseño listo</span>
        </div>
      </section>

      <section className="card" style={{ gridColumn: "span 4" }}>
        <h3 className="h3">Catálogo</h3>
        <div className="small">UI preparada para /api/catalog/products</div>
        <div className="row" style={{ marginTop: "var(--space-3)" }}>
          <span className="badge ok">Diseño listo</span>
        </div>
      </section>

      <section className="card" style={{ gridColumn: "span 4" }}>
        <h3 className="h3">Serverless + Cola</h3>
        <div className="small">Sprint 2: SQS + Lambda + status NOTIFIED</div>
        <div className="row" style={{ marginTop: "var(--space-3)" }}>
          <span className="badge warn">Pendiente</span>
        </div>
      </section>

      <section className="card" style={{ gridColumn: "span 12" }}>
        <h3 className="h3">Checklist Sprint 1</h3>
        <ul className="small">
          <li>Infra Docker Compose (Postgres, Redis, Elastic, LocalStack)</li>
          <li>Gateway (8080) con CORS y rutas base</li>
          <li>Frontend (5173) con layout y pantallas listas</li>
        </ul>
      </section>
    </div>
  );
}
