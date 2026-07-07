 /// <reference types = "cypress" />

describe ('Login', () =>{
  beforeEach (() => {
    cy.visit ('/login#!')
  })
    
  it('Login com sucesso', () =>{
   
    cy.get('#user')
      .type('joaoqa@gmail.com')
    
    cy.get('#password')
      .type('1234567')
    
    cy.get('#btnLogin')
      .click()
    
    cy.get('#swal2-title')
      .should('contain','Login realizado')
      .and('be.visible')
  })

  it ('Login com senha inválida', () => {
    
    cy.get('#user')
      .type('joaoqa@gmail.com')
     
    cy.get('#password')
      .type('123')  

    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should ('contain','Senha inválida.')
      .should ('be.visible')
  })

  it('Login com e-mail inválido', () =>{
    
    cy.get('#user')
      .type('@joao123')

    cy.get('#password')
      .type('1234567')

    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')  
      .should ('contain','E-mail inválido.')
      .should ('be.visible')
  })

  it('Login com credenciais vazias', () => {
    
    cy.get ('#user')
      
    cy.get('#password')
    
    cy.get('#btnLogin')
      .click()
     
    cy.get('.invalid_input')  
      .should ('contain','E-mail inválido.')
      .should ('be.visible') 
  })  

})