# Automação Web com Cypress

Projeto desenvolvido para praticar automação de testes web utilizando **Cypress** e **JavaScript**, aplicando boas práticas de organização, manutenção e automação de testes.

## Objetivo

Automatizar os principais cenários de login e cadastro de usuários, evoluindo o projeto de forma incremental com foco em boas práticas utilizadas em projetos reais de automação.

## Tecnologias

- JavaScript
- Cypress
- Node.js
- FakerJS

## Ferramentas

- Git
- GitHub
- Visual Studio Code

## Funcionalidades implementadas

### Login

- ✅ Login realizado com sucesso.
- ✅ Login com senha inválida.
- ✅ Login com e-mail inválido.
- ✅ Login com credenciais vazias.

### Cadastro

- ✅ Cadastro realizado com sucesso.
- ✅ Cadastro com e-mail inválido.
- ✅ Cadastro com senha inválida.
- ✅ Cadastro com nome vazio.
- ✅ Cadastro com e-mail vazio.
- ✅ Cadastro com senha vazia.

## Melhorias implementadas

- Configuração da `baseUrl` para centralizar a URL da aplicação.
- Utilização do `beforeEach()` para reduzir repetição de código.
- Geração dinâmica de dados utilizando **FakerJS**.
- Organização dos testes em arquivos separados por funcionalidade (`login.cy.js` e `cadastro.cy.js`).
- Correção do cenário de login com credenciais vazias.

## Estrutura do projeto

```text
cypress
└── e2e
    ├── login.cy.js
    └── cadastro.cy.js
```

## Como executar o projeto

1. Clone este repositório.

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências.

```bash
npm install
```

3. Execute o Cypress.

```bash
npx cypress open
```

ou

```bash
npx cypress run
```

## Próximas implementações

- Implementação de **Page Object Model (POM)**.
- Utilização de **Custom Commands**.
- Utilização de **Fixtures**.
- Geração de relatórios de execução.
- Inclusão de evidências dos testes.

## Autor

**João Antonio**

**LinkedIn:**  
https://www.linkedin.com/in/joao-antonio-qa2026

**GitHub:**  
https://github.com/joaosr1010-dot