import Icon from "../comuns/Icon";
import { itensNavegacao } from '../../dados/mockData'

export default function Sidebar({ active, onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">+</div>
        <div>
          <strong>Conecta</strong>
          <span>Sesi</span>
        </div>
      </div>
      <div className="menu-label">MENU PRINCIPAL</div>
      <nav>
        {itensNavegacao.map(([id, label, icon]) => (
          <button
            key={id}
            className={`nav-item ${active === id ? "active" : ""}`}
            onClick={() => onNavigate(id)}
          >
            <Icon>{icon}</Icon>
            <span>{label}</span>
            {active === id && <i />}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="help-box">
          <span className="help-icon">?</span>
          <div>
            <strong>Precisa de ajuda?</strong>
            <small>Fale com a secretaria</small>
          </div>
        </div>
        <button className="nav-item logout" onClick={onLogout}>
          <Icon>↪</Icon>
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
