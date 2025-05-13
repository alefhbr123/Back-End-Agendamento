<h1 align="center">
Agendamento - Back-End
</h1>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

Este é o repositório do backend do sistema de agendamentos, desenvolvido em Node.js e Express. Fornece uma API REST simples para criar, listar, visualizar e excluir agendamentos, com armazenamento em memória.

## 🚀Tecnologias Utilizadas
- ``Node.js 18.x ou superior``
- ``Express 5.x``
- ``CORS para habilitar chamadas de origens diferentes``
- ``Nodemon para desenvolvimento com recarga automática``

## 📦​Instalação
## 1. Clonar o Repositório

Abra o terminal e execute os comandos abaixo:

```bash
git clone https://github.com/alefhbr123/agendamentos-back.git
cd agendamentos-front
```
## 2. Instale as dependências:
```bash
npm install
```
Executando em modo de desenvolvimento
```bash
npm run dev
```

O servidor iniciará em http://localhost:4000 com nodemon, recarregando automaticamente ao detectar alterações.

## 🏗Estrutura do projeto
```text
 agendamentos-front/
├── pages/
│   ├── index.js       # Página principal (form + lista)
│   └── agendamento/
│       └── [id].js    # Detalhes de um agendamento
├── public/            # Arquivos estáticos
├── styles/            # Estilos globais (se aplicável)
├── package.json
└── README.md

```
