import { useMemo, useState } from "react";
import Icon from "../componentes/comuns/Icon";
import DeviceCard from "../componentes/aparelhos/DeviceCard";

export default function DevicesPage({ devices, onRequest }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const filteredDevices = useMemo(
    () =>
      devices
        .filter((device) =>
          `${device.name} ${device.brand} ${device.type}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .filter(
          (device) =>
            filter === "Todos" ||
            (filter === "Disponíveis"
              ? device.available > 0
              : filter === "Indisponíveis"
                ? device.available === 0
                : device.type === filter.slice(0, -1)),
        ),
    [filter, query],
  );
  return (
    <div className="page-content">
      <div className="page-intro">
        <div>
          <span className="eyebrow">ACERVO DA ESCOLA</span>
          <h2>Catálogo de aparelhos</h2>
          <p>
            Encontre notebooks e celulares para apoiar suas aulas e projetos.
          </p>
        </div>
        <div className="catalog-count">
          <strong>{filteredDevices.length}</strong>
          <span>tipos de aparelhos</span>
        </div>
      </div>
      <div className="catalog-toolbar">
        <label className="search">
          <Icon>⌕</Icon>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nome ou marca"
          />
        </label>
        <div className="filters">
          {[
            "Todos",
            "Notebooks",
            "Celulares",
            "Disponíveis",
            "Indisponíveis",
          ].map((item) => (
            <button
              key={item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="devices-grid">
        {filteredDevices.map((device) => (
          <DeviceCard key={device.id} device={device} onRequest={onRequest} />
        ))}
      </div>
      {filteredDevices.length === 0 && (
        <div className="empty-state">Nenhum aparelho encontrado.</div>
      )}
    </div>
  );
}
