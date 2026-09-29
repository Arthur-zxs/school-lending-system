import { useState } from 'react'

const formularioInicial = {
  nome: '',
  registro: '',
  email: '',
  setor: '',
  senha: '',
  confirmarSenha: '',
}

export default function Cadastro({ onVoltar, onCadastroConcluido }) {
  const [formulario, setFormulario] = useState(formularioInicial)
  const [erro, setErro] = useState('')

  function atualizarCampo(evento) {
    const { name, value } = evento.target
    setFormulario(atual => ({ ...atual, [name]: value }))
    setErro('')
  }

  function criarConta(evento) {
    evento.preventDefault()

    if (formulario.senha !== formulario.confirmarSenha) {
      setErro('As senhas precisam ser iguais.')
      return
    }

    onCadastroConcluido({
      nome: formulario.nome.trim(),
      registro: formulario.registro.trim(),
      email: formulario.email.trim(),
      setor: formulario.setor,
    })
  }

  return (
    <main className="login-page cadastro-page">
      <div className="login-decoration">
        <div className="login-shape shape-one" />
        <div className="login-shape shape-two" />
        <div className="login-grid" />
      </div>

      <section className="login-panel cadastro-panel">
        <div className="brand login-brand">
          <div className="brand-mark">+</div>
          <div><strong>Conecta</strong><span>Sesi</span></div>
        </div>

        <div className="login-copy cadastro-copy">
          <span className="eyebrow">NOVO ACESSO</span>
          <h1>Criar conta<span>.</span></h1>
          <p>Cadastre seus dados para acessar o sistema de empréstimos.</p>
        </div>

        <form onSubmit={criarConta} className="cadastro-form">
          <div className="cadastro-grid">
            <label>Nome completo
              <input name="nome" value={formulario.nome} onChange={atualizarCampo} placeholder="Digite seu nome" required />
            </label>
            <label>Registro de matricula
              <input name="registro" value={formulario.registro} onChange={atualizarCampo} placeholder="Ex.: RF 20240187" required />
            </label>
          </div>

          <label>E-mail institucional
            <input type="email" name="email" value={formulario.email} onChange={atualizarCampo} placeholder="voce@escola.edu.br" required />
          </label>

          <label>Setor de atuação
            <select name="setor" value={formulario.setor} onChange={atualizarCampo} required>
              <option value="">Selecione seu setor</option>
              <option>Coordenação de tecnologia</option>
              <option>Secretaria acadêmica</option>
              <option>Eventos e comunicação</option>
              <option>Direção</option>
              <option>Professor</option>
            </select>
          </label>

          <div className="cadastro-grid">
            <label>Senha
              <input type="password" name="senha" value={formulario.senha} onChange={atualizarCampo} placeholder="Crie uma senha" minLength="6" required />
            </label>
            <label>Confirmar senha
              <input type="password" name="confirmarSenha" value={formulario.confirmarSenha} onChange={atualizarCampo} placeholder="Repita sua senha" minLength="6" required />
            </label>
          </div>

          {erro && <p className="form-error" role="alert">{erro}</p>}

          <button className="primary-button login-button" type="submit">Criar conta <span>→</span></button>
        </form>

        <button className="create-account" type="button" onClick={onVoltar}>Já possui uma conta? <strong>Voltar para entrar</strong></button>
        <small className="login-footer">Cadastro destinado a funcionários e colaboradores</small>
      </section>
    </main>
  )
}
