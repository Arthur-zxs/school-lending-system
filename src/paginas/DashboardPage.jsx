import Icon from '../componentes/comuns/Icon'
import StatCard from '../componentes/comuns/StatCard'
import LoanTable from '../componentes/emprestimos/LoanTable'

export default function DashboardPage({ onNavigate, loans, onReturn, funcionario }) {
  const primeiroNome = funcionario?.nome?.split(' ')[0] || 'funcionário'

  return (
    <div className="page-content">
      <section className="welcome">
        <div>
          <span className="eyebrow">SEGUNDA-FEIRA, 23 DE SETEMBRO DE 2024</span>
          <h2>Bom dia, {primeiroNome} <span>✦</span></h2>
          <p>Acompanhe seus empréstimos e encontre o aparelho ideal para sua rotina.</p>
        </div>
        <button className="primary-button" onClick={() => onNavigate('devices')}>
          <Icon>+</Icon> Solicitar aparelho
        </button>
      </section>

      <section className="stats-grid">
        <StatCard label="Total de aparelhos" value="68" detail="no acervo" icon="▦" tone="red" />
        <StatCard label="Notebooks disponíveis" value="20" detail="de 30 aparelhos" icon="▣" tone="blue" />
        <StatCard label="Celulares disponíveis" value="15" detail="de 38 aparelhos" icon="▯" tone="green" />
        <StatCard label="Empréstimos ativos" value={String(loans.length).padStart(2, '0')} detail="em andamento" icon="↔" tone="orange" />
      </section>

      <div className="section-heading">
        <div><h2>Empréstimos atuais</h2><p>Aparelhos que estão sob sua responsabilidade</p></div>
        <button className="text-button" onClick={() => onNavigate('loans')}>Ver todos <span>→</span></button>
      </div>

      <LoanTable rows={loans} compact onReturn={onReturn} />

      <div className="dashboard-bottom">
        <section className="quick-card">
          <div className="quick-icon">▣</div>
          <div><strong>Encontre seu próximo aparelho</strong><p>Consulte o catálogo completo e faça uma solicitação em poucos passos.</p></div>
          <button className="outline-button" onClick={() => onNavigate('devices')}>Ver catálogo <span>→</span></button>
        </section>
        <section className="notice-card">
          <div className="notice-title"><span>!</span><strong>Lembrete importante</strong></div>
          <p>Devolva os aparelhos no horário combinado para evitar atrasos e manter o acervo disponível.</p>
        </section>
      </div>
    </div>
  )
}
