import { faker } from '@faker-js/faker'

describe ('Cadastro',() =>{
  const cadastro_page = require ('../support/pages/cadastro-page')
  let nome, email, senha

  beforeEach(() => {
    nome = faker.person.fullName()
    email = faker.internet.email({provider: 'gmail.com'})
    senha = faker.internet.password({length: 8})
    cadastro_page.acessarCadastro()
  })

    it('Cadastro realizado com sucesso', () => {

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail(email)
        cadastro_page.preencherSenha(senha)
        cadastro_page.clicarCadastrar()
        cy.get('#swal2-title')
          .should ('contain', 'Cadastro realizado!')
          .and ('be.visible')
    })

    it('Cadastro com e-mail inválido', () => {

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail('joaogmail.com')
        cadastro_page.preencherSenha(senha)   
        cadastro_page.clicarCadastrar()
        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })

    it('Cadastro com senha inválida', () => {

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail(email)
        cadastro_page.preencherSenha('123')
        cadastro_page.clicarCadastrar()
        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo senha deve ter pelo menos 6 dígitos')
          .and ('be.visible')
    })

     it('Cadastro com nome vazio', () => {

        cadastro_page.preencherEmail(email)
        cadastro_page.preencherSenha(senha)
        cadastro_page.clicarCadastrar()
        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo nome deve ser prenchido')
          .and ('be.visible')
    })       

    it('Cadastro com e-mail vazio', () => {

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherSenha(senha)
        cadastro_page.clicarCadastrar()
        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })
    
    it('Cadastro com senha vazia', () => {

        cadastro_page.preencherNome(nome)
        cadastro_page.preencherEmail(email)
        cadastro_page.clicarCadastrar()
        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo senha deve ter pelo menos 6 dígitos')
          .and ('be.visible')

    })

})