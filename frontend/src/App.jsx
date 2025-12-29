import { useMemo, useState } from "react";

import Layout from "./components/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Orders from "./pages/orders.jsx";
import Catalog from "./pages/catalog.jsx";
import Search from "./pages/search.jsx";


export default function App() {
  const [current, setCurrent] = useState("dashboard");

  const meta = useMemo(() => {
    switch (current) {
      case "orders":
        return { title: "Pedidos", subtitle: "Diseño listo. Conexión API en Sprint 2." };
      case "catalog":
        return { title: "Catálogo", subtitle: "UI preparada para stock e inventario." };
      case "search":
        return { title: "Búsqueda", subtitle: "Pantalla base para indexación (Sprint 3)." };
      default:
        return { title: "Dashboard", subtitle: "Resumen del ecosistema y estado del sprint." };
    }
  }, [current]);

  return (
    <Layout
      current={current}
      onNavigate={setCurrent}
      title={meta.title}
      subtitle={meta.subtitle}
    >
      {current === "dashboard" && <Dashboard />}
      {current === "orders" && <Orders />}
      {current === "catalog" && <Catalog />}
      {current === "search" && <Search />}
    </Layout>
  );
}
