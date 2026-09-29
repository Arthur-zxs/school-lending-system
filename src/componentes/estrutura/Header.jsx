export default function Header({ title, subtitle, funcionario, onMenu, onProfile }) {
  const nome = funcionario?.nome || 'Funcionário'
  const registro = funcionario?.registro || 'Sem registro'
  const iniciais = nome
    .split(' ')
    .map(parte => parte[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header className="header">
      <button className="mobile-menu" onClick={onMenu} aria-label="Abrir menu">☰</button>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="header-actions">
        <button className="notification" aria-label="Notificações">♢<span /></button>
        <button className="user-chip" onClick={onProfile}>
          <span className="avatar">{iniciais}</span>
          <span className="user-details">
            <strong>{nome}</strong>
            <small>RM {registro}</small>
          </span>
          <span className="chevron">⌄</span>
        </button>
      </div>
    </header>
  )
}
