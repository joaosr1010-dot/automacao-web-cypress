 /// <reference types = "cypress" />

const login_page = require('../support/pages/login-page')

describe ('Login', () =>{
beforeEach (() => {
    login_page.acessarLogin()
  })
    
  it('Login com sucesso', () =>{

    login_page.preencherEmail('joao12@gmail.com')
    login_page.preencherSenha('1234567')
    login_page.clicarLogin()
    cy.get('#swal2-title')
      .should('contain','Login realizado')
      .and('be.visible')
  })

  it('Login com senha inválida', () => {
    
    login_page.preencherEmail('joao12@gmail.com')
    login_page.preencherSenha('123') 
    login_page.clicarLogin()
    cy.get('.invalid_input')
      .should ('contain','Senha inválida.')
      .should ('be.visible')
  })

  it('Login com e-mail inválido', () =>{
    
    login_page.preencherEmail('joaogmail.com')
    login_page.preencherSenha('1234567')
    login_page.clicarLogin()
    cy.get('.invalid_input')  
      .should ('contain','E-mail inválido.')
      .should ('be.visible')
  })

  it('Login com e-mail vazio', () => {
    
    login_page.preencherSenha('1234567')
    login_page.clicarLogin()     
     cy.get('.invalid_input')  
       .should ('contain','E-mail inválido.')
       .should ('be.visible') 
  })  

  it('Login com senha vazia', () => {

    login_page.preencherEmail('joao@gmail.com')
    login_page.clicarLogin()
    cy.get('.invalid_input')
      .should ('contain','Senha inválida.')
      .should ('be.visible')

  })

})