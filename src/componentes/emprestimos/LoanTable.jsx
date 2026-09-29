import Badge from "../comuns/Badge";

export default function LoanTable({ rows, compact = false, onReturn }) {
  return (
    <div className={`table-wrap ${compact ? "compact-table" : ""}`}>
      <table>
        <thead>
          <tr>
            <th>Aparelho</th>
            <th>Qtd.</th>
            <th>Sala</th>
            <th>Setor</th>
            <th>Data</th>
            <th>Status</th>
            {onReturn && <th />}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-cell">
                Nenhum empréstimo ativo.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id || row.device}>
                <td>
                  <div className="device-cell">
                    <span className="mini-device">
                      {row.device.includes("Galaxy") ||
                      row.device.includes("Motorola")
                        ? "▯"
                        : "▣"}
                    </span>
                    <strong>{row.device}</strong>
                  </div>
                </td>
                <td>{row.qty}</td>
                <td>{row.room}</td>
                <td>{row.department || "—"}</td>
                <td>{row.date}</td>
                <td>
                  <Badge tone={row.statusTone || "green"}>{row.status}</Badge>
                </td>
                {onReturn && (
                  <td>
                    <button
                      className="return-button"
                      onClick={() => onReturn(row)}
                    >
                      Devolver
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
