import { useState } from "react";

export default function Login({ onLogin, onCreateAccount, mensagem }) {
  const [rm, setRm] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="login-page">
      <div className="login-decoration">
        <div className="login-shape shape-one" />
        <div className="login-shape shape-two" />
        <div className="login-grid" />
      </div>
      <section className="login-panel">
        <div className="brand login-brand">
          <div className="brand-mark">+</div>
          <div>
            <strong>Conecta</strong>
            <span>Escolar</span>
          </div>
        </div>
        <div className="login-copy">
          <span className="eyebrow">PORTAL DO FUNCIONÁRIO</span>
          <h1>
            Olá, funcionário<span>.</span>
          </h1>
          <p>Entre para gerenciar seus empréstimos de aparelhos.</p>
        </div>
        {mensagem && (
          <p className="form-success" role="status">
            ✓ {mensagem}
          </p>
        )}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          <label>
            Registro de matricula
            <input
              value={rm}
              onChange={(event) => setRm(event.target.value)}
              placeholder="Digite seu registro"
            />
          </label>
          <label>
            Senha
            <div className="password-input">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite sua senha"
              />
              <span>◉</span>
            </div>
          </label>
          <button className="primary-button login-button" type="submit">
            Entrar <span>→</span>
          </button>
        </form>
        <button
          className="create-account"
          type="button"
          onClick={onCreateAccount}
        >
          Ainda não tem uma conta? <strong>Criar conta</strong>
        </button>
        <small className="login-footer">
          Acesso exclusivo para funcionários e colaboradores
        </small>
      </section>
    </main>
  );
}
