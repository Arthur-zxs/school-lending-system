export default function LoanModal({ device, onClose }) {
  if (!device) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <span className="eyebrow">NOVA SOLICITAÇÃO</span>
        <h2>Solicitar aparelho</h2>
        <p className="modal-subtitle">
          Preencha os dados para reservar seu aparelho.
        </p>
        <div className="modal-device">
          <div className={`device-visual visual-${device.tone}`}>
            <span>{device.icon}</span>
          </div>
          <div>
            <strong>{device.name}</strong>
            <small>
              {device.brand} · {device.available} disponíveis
            </small>
          </div>
        </div>
        <label>
          Quantidade
          <input
            type="number"
            defaultValue="1"
            min="1"
            max={device.available}
          />
        </label>
        <label>
          Sala de utilização
          <select defaultValue="Lab. 04">
            <option>Lab. 04</option>
            <option>Lab. 02</option>
            <option>Sala 12</option>
            <option>Sala 08</option>
          </select>
        </label>
        <label>
          Data de devolução
          <input type="date" defaultValue="2024-09-27" />
        </label>
        <button className="primary-button full-button" onClick={onClose}>
          Confirmar solicitação <span>→</span>
        </button>
      </div>
    </div>
  );
}
