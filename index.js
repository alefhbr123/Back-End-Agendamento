const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// armazenamento em memória
let agendamentos = [
  { id: 1, nome: "João", data: "2025-05-15", hora: "09:00" },
  { id: 2, nome: "Maria", data: "2025-05-16", hora: "14:30" }
];

// GET /agendamentos → lista todos
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

// POST /agendamentos → cria novo
app.post('/agendamentos', (req, res) => {
  const { nome, data, hora } = req.body;
  const novo = { id: Date.now(), nome, data, hora };
  agendamentos.push(novo);
  res.status(201).json(novo);
});

// DELETE /agendamentos/:id → remove um
app.delete('/agendamentos/:id', (req, res) => {
  const id = Number(req.params.id);
  agendamentos = agendamentos.filter(a => a.id !== id);
  res.status(204).end();
});

// GET /agendamentos/:id → retorna um único agendamento
app.get('/agendamentos/:id', (req, res) => {
  const id = Number(req.params.id);
  const ag = agendamentos.find(a => a.id === id);
  if (ag) return res.json(ag);
  res.status(404).json({ error: "Não encontrado" });
});

// iniciar servidor
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Back-end rodando na porta ${PORT}`));
