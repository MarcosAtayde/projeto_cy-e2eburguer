describe('Login', () => {

  it('pLogin realizado com sucesso', () => {
    cy.visit('/')
    cy.get('#email').type('teste.qa@gmail.com')
    cy.get('#password').type('Teste@123!')
    cy.contains('button[type=submit]', 'Acessar').click()

    cy.get('.Toastify__toast-body')
      .should('be.visible')
      .and('have.text', 'Login realizado com sucesso!')
  })

  it('Não deve logar quando senha inválida', () => {
    cy.visit('/')
    cy.get('#email').type('teste.qa@gmail.com')
    cy.get('#password').type('Teste@123')
    cy.contains('button[type=submit]', 'Acessar').click()

    cy.get('.Toastify__toast-body')
      .should('be.visible')
      .and('have.text', 'Credenciais inválidas. Verifique seu e-mail e senha.')
  })

  it('Não deve logar quando email inválido', () => {
    cy.visit('/')
    cy.get('#email').type('testeqa@gmail.com')
    cy.get('#password').type('Teste@123!')
    cy.contains('button[type=submit]', 'Acessar').click()

    cy.get('.Toastify__toast-body')
      .should('be.visible')
      .and('have.text', 'Credenciais inválidas. Verifique seu e-mail e senha.')
  })

})