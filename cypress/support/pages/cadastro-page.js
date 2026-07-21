export function acessarCadastro(){
        cy.visit ('/register')

}

export function preencherNome(nome){
    cy.get('#user')
      .type(nome)
}

export function preencherEmail(email){
    cy.get('#email')
      .type(email)    
}

export function preencherSenha(senha){
    cy.get('#password')
      .type(senha)
}

export function clicarCadastrar () {
    cy.get('#btnRegister')
      .click ()
}

