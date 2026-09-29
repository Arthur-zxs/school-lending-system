import { useState } from 'react'
import './App.css'

import Sidebar from './componentes/estrutura/Sidebar'
import Header from './componentes/estrutura/Header'
import Login from './componentes/autenticacao/Login'
import Cadastro from './componentes/autenticacao/Cadastro'
import LoanModal from './componentes/emprestimos/LoanModal'

import DashboardPage from './paginas/DashboardPage'
import DevicesPage from './paginas/DevicesPage'
import LoansPage from './paginas/LoansPage'
import MapPage from './paginas/MapPage'
import HistoryPage from './paginas/HistoryPage'
import ProfilePage from './paginas/ProfilePage'

import {
  aparelhos,
  emprestimosAtuais,
  historicoEmprestimos,
  dadosPaginas,
} from './dados/mockData'

const paginas = {
  home: DashboardPage,
  devices: DevicesPage,
  loans: LoansPage,
  map: MapPage,
  history: HistoryPage,
  profile: ProfilePage,
}

export default function App() {
  const [estaLogado, setEstaLogado] = useState(false)
  const [funcionario, setFuncionario] = useState({
    nome: 'Funcionário',
    registro: '',
    email: '',
    setor: '',
  })
  const [telaDeAcesso, setTelaDeAcesso] = useState('login')
  const [mensagemLogin, setMensagemLogin] = useState('')
  const [paginaAtiva, setPaginaAtiva] = useState('home')
  const [aparelhoSelecionado, setAparelhoSelecionado] = useState(null)
  const [menuMobileAberto, setMenuMobileAberto] = useState(false)
  const [listaAparelhos, setListaAparelhos] = useState(aparelhos)
  const [listaEmprestimos, setListaEmprestimos] = useState(emprestimosAtuais)
  const [listaHistorico, setListaHistorico] = useState(historicoEmprestimos)
  const [mensagem, setMensagem] = useState('')

  function navegar(pagina) {
    setPaginaAtiva(pagina)
    setMenuMobileAberto(false)
  }

  function registrarDevolucao(emprestimo) {
    setListaEmprestimos(emprestimos =>
      emprestimos.filter(item => item.id !== emprestimo.id),
    )

    setListaHistorico(historico => [
      { ...emprestimo, returned: 'Agora', status: 'Devolvido' },
      ...historico,
    ])

    setListaAparelhos(aparelhosAtuais =>
      aparelhosAtuais.map(aparelho => {
        if (aparelho.name !== emprestimo.device) return aparelho

        return {
          ...aparelho,
          available: Math.min(
            aparelho.total,
            aparelho.available + emprestimo.qty,
          ),
        }
      }),
    )

    setMensagem(`${emprestimo.device} foi registrado como devolvido.`)
    window.setTimeout(() => setMensagem(''), 3500)
  }

  if (!estaLogado) {
    if (telaDeAcesso === 'cadastro') {
      return <Cadastro onVoltar={() => setTelaDeAcesso('login')} onCadastroConcluido={dadosFuncionario => { setFuncionario(dadosFuncionario); setTelaDeAcesso('login'); setMensagemLogin('Conta criada com sucesso. Faça seu login para continuar.') }} />
    }

    return <Login onLogin={() => setEstaLogado(true)} onCreateAccount={() => { setMensagemLogin(''); setTelaDeAcesso('cadastro') }} mensagem={mensagemLogin} />
  }

  const PaginaAtual = paginas[paginaAtiva]
  const [titulo, subtitulo] = dadosPaginas[paginaAtiva]

  const propriedadesDaPagina = {
    home: {
      onNavigate: navegar,
      loans: listaEmprestimos,
      onReturn: registrarDevolucao,
      funcionario,
    },
    devices: {
      devices: listaAparelhos,
      onRequest: setAparelhoSelecionado,
    },
    loans: {
      loans: listaEmprestimos,
      onReturn: registrarDevolucao,
    },
    history: {
      history: listaHistorico,
    },
    profile: {
      loans: listaEmprestimos,
      funcionario,
    },
  }[paginaAtiva] || {}

  return (
    <div className="app-shell">
      <Sidebar
        active={paginaAtiva}
        onNavigate={navegar}
        onLogout={() => setEstaLogado(false)}
      />

      <div className={`main-area ${menuMobileAberto ? 'nav-open' : ''}`}>
        <Header
          title={titulo}
          subtitle={subtitulo}
          funcionario={funcionario}
          onMenu={() => setMenuMobileAberto(aberto => !aberto)}
          onProfile={() => navegar('profile')}
        />

        <main>
          <PaginaAtual {...propriedadesDaPagina} />
        </main>

        <footer className="footer">
          © 2024 Conecta Escolar <span>·</span> Ambiente acadêmico
        </footer>
      </div>

      {mensagem && (
        <div className="return-toast" role="status">
          ✓ {mensagem}
        </div>
      )}

      {aparelhoSelecionado && (
        <LoanModal
          device={aparelhoSelecionado}
          onClose={() => setAparelhoSelecionado(null)}
        />
      )}
    </div>
  )
}
