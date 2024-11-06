# Formulário de Cadastro de Membros

Este projeto faz parte do processo seletivo para a vaga voluntária de Frontend na **Frontend Fusion**. O desafio consiste em criar um formulário de cadastro de membros com validação de dados e armazenamento local.

## 🎯 Objetivo

Desenvolver um formulário para cadastro de novos membros do projeto **Frontend Fusion**, aplicando validação, estilização responsiva e armazenamento local no navegador.

## 🛠️ Tecnologias Utilizadas

- **React**: biblioteca principal para criação de interfaces.
- **Yup**: para validação de dados dos campos do formulário.
- **React Hook Form**: para manipulação e validação de formulários.
- **Material UI (MUI)**: para uma interface moderna com componentes pré-estilizados.
- **Tailwind CSS**: para estilização rápida e responsiva.
- **Vite**: ferramenta para desenvolvimento e build do projeto.
- **ESLint**: para garantir boas práticas de código.

## 📋 Funcionalidades do Formulário

- **Campos Obrigatórios**:
  - Nome Completo
  - E-mail (com validação de formato)
  - Telefone
  - Cargo Pretendido (seleção de uma lista pré-definida)
- **Campos Opcionais**:
  - LinkedIn
  - GitHub
- **Cargos Disponíveis**:
  - Desenvolvedor Frontend, Backend, Full Stack, Mobile, Software, Engenheiro de Software, Arquiteto de Software, UI/UX Designer, Analista de Sistemas, Programador, DevOps Engineer, Engenheiro de Dados, QA Engineer, Scrum Master, Product Owner.

## ✅ Validação de Dados

- **Yup** é utilizado para validar todos os campos obrigatórios e opcionais.
- Validação de formato para o campo de **e-mail**.
- Todos os campos obrigatórios precisam ser preenchidos para submeter o formulário.

## 💾 Armazenamento Local

Os dados de cadastro são salvos no **localStorage** para garantir que as informações sejam preservadas mesmo após o fechamento da página.

## 🚦 Mensagens de Estado

- Exibe mensagens de feedback para o usuário:
  - "Cadastro realizado com sucesso!" ao salvar os dados.
  - "Falha ao cadastrar. Verifique os dados informados." em caso de erro de validação.

## 📦 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o aplicativo no navegador:
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
- `npm run build`: Gera uma versão otimizada para produção.
- `npm run preview`: Visualiza a versão de produção localmente.
- `npm run lint`: Executa o ESLint para verificar o código.

---
