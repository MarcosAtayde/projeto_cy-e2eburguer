Cypress.Commands.add('acessarHome', () => {
    cy.visit('/')
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')
})

Cypress.Commands.add('preencherFormLogin', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})

Cypress.Commands.add('clicarBtnSubmit', (textoBtn) => {
    cy.contains('button[type=submit]', textoBtn).click()
})

Cypress.Commands.add('verificarMsgEsperada', (msgEsperada) => {
    cy.get('.Toastify__toast-body')
        .should('be.visible')
        .and('have.text', msgEsperada)

})

Cypress.Commands.add('verificarMsgErro', (msgErro) => {
    cy.get('[class^="home_errorText"]')
        .should('be.visible')
        .and('contain.text', msgErro)
        .and('have.css', 'color', 'rgb(230, 57, 70)')

})

