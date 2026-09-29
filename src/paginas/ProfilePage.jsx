import Badge from '../componentes/comuns/Badge'

export default function ProfilePage({ loans, funcionario }) {
  const nome = funcionario?.nome || 'Funcionário'
  const registro = funcionario?.registro || 'Sem registro'
  const email = funcionario?.email || 'Não informado'
  const setor = funcionario?.setor || 'Não informado'
  const iniciais = nome.split(' ').map(parte => parte[0]).slice(0, 2).join('').toUpperCase()

  return (
    <div className="page-content">
      <div className="page-intro">
        <div>
          <span className="eyebrow">CONTA DO FUNCIONÁRIO</span>
          <h2>Meu perfil</h2>
          <p>Visualize seus dados e acompanhe seus empréstimos.</p>
        </div>
        <button className="outline-button">Editar perfil</button>
      </div>

      <div className="profile-layout">
        <section className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">{iniciais}</div>
            <div><h3>{nome}</h3><p>Funcionário · {setor}</p></div>
          </div>

          <div className="profile-fields">
            <div><span>Nome completo</span><strong>{nome}</strong></div>
            <div><span>Registro funcional</span><strong>RF {registro}</strong></div>
            <div><span>E-mail institucional</span><strong>{email}</strong></div>
            <div><span>Setor de atuação</span><strong>{setor}</strong></div>
          </div>
        </section>

        <section className="profile-loans">
          <div className="section-heading">
            <div><h2>Meus empréstimos</h2><p>Resumo atual</p></div>
            <Badge tone="blue">{String(loans.length).padStart(2, '0')} ativos</Badge>
          </div>

          <div className="profile-loan-list">
            {loans.map(loan => (
              <div className="profile-loan" key={loan.id}>
                <span className="mini-device">{loan.device.includes('Galaxy') ? '▯' : '▣'}</span>
                <div><strong>{loan.device}</strong><small>{loan.qty} unidade(s) · {loan.room}</small></div>
                <Badge tone={loan.statusTone}>{loan.status}</Badge>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
