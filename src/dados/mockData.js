export const aparelhos = [
  { id: 1, name: 'Dell Latitude 5420', type: 'Notebook', brand: 'Dell', total: 12, available: 8, tone: 'blue', icon: '▣' },
  { id: 2, name: 'Lenovo ThinkPad E14', type: 'Notebook', brand: 'Lenovo', total: 10, available: 4, tone: 'red', icon: '▣' },
  { id: 3, name: 'Samsung Book 2', type: 'Notebook', brand: 'Samsung', total: 8, available: 8, tone: 'dark', icon: '▣' },
  { id: 4, name: 'Samsung Galaxy A54', type: 'Celular', brand: 'Samsung', total: 18, available: 13, tone: 'green', icon: '▯' },
  { id: 5, name: 'Motorola Moto G84', type: 'Celular', brand: 'Motorola', total: 14, available: 0, tone: 'purple', icon: '▯' },
  { id: 6, name: 'Samsung Galaxy S23 FE', type: 'Celular', brand: 'Samsung', total: 6, available: 2, tone: 'orange', icon: '▯' },
]

export const emprestimosAtuais = [
  { id: 1, device: 'Dell Latitude 5420', qty: 2, room: 'Lab. 04', department: 'Coord. de tecnologia', date: 'Hoje, 08:30', status: 'Em uso', statusTone: 'blue' },
  { id: 2, device: 'Samsung Galaxy A54', qty: 4, room: 'Sala 12', department: 'Eventos e comunicação', date: 'Hoje, 10:15', status: 'Em uso', statusTone: 'blue' },
  { id: 3, device: 'Lenovo ThinkPad E14', qty: 1, room: 'Lab. 02', department: 'Secretaria acadêmica', date: 'Ontem, 14:20', status: 'Atrasado', statusTone: 'red' },
]

export const historicoEmprestimos = [
  { device: 'Samsung Book 2', qty: 2, room: 'Lab. 01', date: '18 set 2024', returned: '18 set 2024', status: 'Devolvido' },
  { device: 'Motorola Moto G84', qty: 3, room: 'Sala 08', date: '12 set 2024', returned: '13 set 2024', status: 'Devolvido' },
  { device: 'Dell Latitude 5420', qty: 1, room: 'Lab. 04', date: '05 set 2024', returned: '06 set 2024', status: 'Devolvido' },
  { device: 'Lenovo ThinkPad E14', qty: 2, room: 'Lab. 02', date: '29 ago 2024', returned: '30 ago 2024', status: 'Devolvido' },
]

export const salas = [
  { id: 'lab-01', name: 'Lab. 01', kind: 'Laboratório', devices: ['6 Samsung Book 2'] },
  { id: 'lab-02', name: 'Lab. 02', kind: 'Laboratório', devices: ['1 Lenovo ThinkPad E14'] },
  { id: 'lab-03', name: 'Lab. 03', kind: 'Laboratório', devices: ['Livre'] },
  { id: 'lab-04', name: 'Lab. 04', kind: 'Laboratório', devices: ['2 Dell Latitude 5420'] },
  { id: 'sala-08', name: 'Sala 08', kind: 'Sala de aula', devices: ['3 Motorola Moto G84'] },
  { id: 'sala-12', name: 'Sala 12', kind: 'Sala de aula', devices: ['4 Samsung Galaxy A54'] },
  { id: 'biblioteca', name: 'Biblioteca', kind: 'Espaço comum', devices: ['Livre'] },
  { id: 'auditorio', name: 'Auditório', kind: 'Espaço comum', devices: ['Livre'] },
]

export const itensNavegacao = [
  ['home', 'Home', '⌂'], ['devices', 'Aparelhos', '▣'], ['loans', 'Empréstimos', '↔'],
  ['map', 'Mapa da escola', '⌆'], ['history', 'Histórico', '◷'], ['profile', 'Meu perfil', '♙'],
]

export const dadosPaginas = {
  home: ['Visão geral', 'Tenha uma visão completa dos seus aparelhos e empréstimos.'],
  devices: ['Aparelhos', 'Consulte a disponibilidade do acervo escolar.'],
  loans: ['Empréstimos', 'Gerencie seus aparelhos em uso.'],
  map: ['Mapa da escola', 'Encontre salas e aparelhos em utilização.'],
  history: ['Histórico', 'Consulte suas movimentações anteriores.'],
  profile: ['Meu perfil', 'Seus dados e empréstimos em um só lugar.'],
}
