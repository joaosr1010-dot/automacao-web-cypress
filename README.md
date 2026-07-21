# Automação Web com Cypress

Projeto desenvolvido para praticar automação de testes web utilizando **Cypress** e **JavaScript**, aplicando boas práticas de organização, manutenção e automação de testes.

## Objetivo

Automatizar os principais cenários de login e cadastro de usuários, evoluindo o projeto de forma incremental com foco em boas práticas utilizadas em projetos reais de automação.

## Tecnologias

- JavaScript
- Cypress
- Node.js
- FakerJS
- Page Object Model (POM)

## Ferramentas

- Git
- GitHub
- Visual Studio Code

## Boas práticas aplicadas

- Organização dos testes por funcionalidade.
- Utilização do `beforeEach()` para reduzir repetição de código.
- Configuração da `baseUrl` para centralizar a URL da aplicação.
- Geração de dados dinâmicos com **FakerJS** nos cenários de cadastro.
- Aplicação do padrão **Page Object Model (POM)** para separar as ações das páginas da lógica dos testes, tornando o código mais organizado, reutilizável e de fácil manutenção.

## Funcionalidades implementadas

### Login

- ✅ Login realizado com sucesso.
- ✅ Login com senha inválida.
- ✅ Login com e-mail inválido.
- ✅ Login com e-mail vazio.
- ✅ Login com senha vazia.

### Cadastro

- ✅ Cadastro realizado com sucesso.
- ✅ Cadastro com e-mail inválido.
- ✅ Cadastro com senha inválida.
- ✅ Cadastro com nome vazio.
- ✅ Cadastro com e-mail vazio.
- ✅ Cadastro com senha vazia.

## Melhorias implementadas

- ✅ Configuração da `baseUrl` para centralizar a URL da aplicação.
- ✅ Utilização do `beforeEach()` para reduzir repetição de código.
- ✅ Geração dinâmica de dados utilizando **FakerJS**.
- ✅ Aplicação do padrão **Page Object Model (POM)**.
- ✅ Organização dos testes utilizando a pasta `pages`.
- ✅ Separação das ações das páginas da lógica dos testes.
- ✅ Organização dos testes em arquivos separados por funcionalidade (`login.cy.js` e `cadastro.cy.js`).

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   └── cadastro.cy.js
│
├── support/
│   ├── pages/
│   │   ├── login-page.js
│   │   └── cadastro-page.js
│   ├── commands.js
│   └── e2e.js
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

3. Execute o Cypress em modo interativo.

```bash
npx cypress open
```

Ou execute todos os testes em modo headless.

```bash
npx cypress run
```

## Próximas implementações

- Implementação do fluxo de **Checkout**.
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