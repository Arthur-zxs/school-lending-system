import Badge from "../componentes/comuns/Badge";
import Icon from "../componentes/comuns/Icon";

export default function HistoryPage({ history }) {
  return (
    <div className="page-content">
      <div className="page-intro">
        <div>
          <span className="eyebrow">SEU HISTÓRICO</span>
          <h2>Histórico de empréstimos</h2>
          <p>Confira todos os aparelhos que você já utilizou.</p>
        </div>
        <button className="outline-button">
          <Icon>⇩</Icon> Exportar lista
        </button>
      </div>
      <div className="table-wrap history-table">
        <table>
          <thead>
            <tr>
              <th>Aparelho</th>
              <th>Qtd.</th>
              <th>Sala</th>
              <th>Retirada</th>
              <th>Devolução</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={`${item.device}-${item.date}-${item.returned}`}>
                <td>
                  <div className="device-cell">
                    <span className="mini-device">▣</span>
                    <strong>{item.device}</strong>
                  </div>
                </td>
                <td>{item.qty}</td>
                <td>{item.room}</td>
                <td>{item.date}</td>
                <td>{item.returned}</td>
                <td>
                  <Badge tone="green">{item.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
