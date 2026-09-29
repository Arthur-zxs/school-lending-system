import { useState } from "react";
import { salas } from '../dados/mockData'

export default function MapPage() {
  const [selectedRoom, setSelectedRoom] = useState(salas[3]);
  return (
    <div className="page-content">
      <div className="page-intro">
        <div>
          <span className="eyebrow">VISÃO GERAL DO CAMPUS</span>
          <h2>Mapa da escola</h2>
          <p>Selecione uma sala para ver os aparelhos em uso.</p>
        </div>
        <div className="map-legend">
          <span>
            <i className="legend-dot in-use" />
            Em uso
          </span>
          <span>
            <i className="legend-dot free" />
            Livre
          </span>
        </div>
      </div>
      <div className="map-layout">
        <section className="school-map">
          <div className="map-road road-top" />
          <div className="map-road road-mid" />
          <RoomBlock
            className="block-a"
            label="BLOCO A"
            rooms={salas.slice(0, 4)}
            selectedRoom={selectedRoom}
            onSelect={setSelectedRoom}
          />
          <RoomBlock
            className="block-b"
            label="BLOCO B"
            rooms={salas.slice(4, 6)}
            selectedRoom={selectedRoom}
            onSelect={setSelectedRoom}
          />
          <RoomBlock
            className="block-c"
            label="ÁREA COMUM"
            rooms={salas.slice(6)}
            selectedRoom={selectedRoom}
            onSelect={setSelectedRoom}
          />
        </section>
        <aside className="room-detail">
          <span className="eyebrow">SALA SELECIONADA</span>
          <div className="room-detail-title">
            <div className="room-pin">⌆</div>
            <div>
              <h3>{selectedRoom.name}</h3>
              <p>{selectedRoom.kind}</p>
            </div>
          </div>
          <div className="detail-divider" />
          <span className="detail-label">APARELHOS EM USO</span>
          {selectedRoom.devices.map((device) => (
            <div className="used-device" key={device}>
              <span className="mini-device">
                {device === "Livre" ? "✓" : "▣"}
              </span>
              <strong>{device}</strong>
            </div>
          ))}
          <button className="outline-button full-button">
            Ver detalhes da sala <span>→</span>
          </button>
        </aside>
      </div>
    </div>
  );
}

function RoomBlock({
  className,
  label,
  rooms: blockRooms,
  selectedRoom,
  onSelect,
}) {
  return (
    <div className={`map-block ${className}`}>
      <span className="block-label">{label}</span>
      {blockRooms.map((room) => (
        <button
          key={room.id}
          className={`room ${selectedRoom.id === room.id ? "selected" : ""} ${room.devices[0] === "Livre" ? "free-room" : ""}`}
          onClick={() => onSelect(room)}
        >
          <strong>{room.name}</strong>
          <small>{room.kind}</small>
        </button>
      ))}
    </div>
  );
}
