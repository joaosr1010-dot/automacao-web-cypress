# Automação Web com Cypress

Projeto desenvolvido para praticar automação de testes web utilizando Cypress e JavaScript.

## Objetivo

Automatizar cenários de autenticação aplicando boas práticas de testes automatizados.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

## Funcionalidades implementadas

- Login com credenciais válidas
- Login com senha inválida
- Login com e-mail inválido
- Login com credenciais vazias

## Melhorias implementadas

- Configuração da `baseUrl` no Cypress para centralizar a URL da aplicação.
- Utilização do `beforeEach()` para reduzir repetição de código nos testes.
- Correção do cenário de login com credenciais vazias, eliminando comandos desnecessários.

## Próximas implementações

- Automação do fluxo de cadastro
- Utilização do FakerJS
- Refatoração utilizando Page Object Model (POM)
- Custom Commands
- Fixtures
- Relatórios de execução
- Evidências dos testes
