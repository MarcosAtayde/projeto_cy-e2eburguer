describe('Login', () => {
    beforeEach(() => {
        cy.acessarHome()
    })

    it('Login realixado com sucesso', () => {
        const usuario = {
            email: 'teste.qa@gmail.com',
            password: 'Teste@123!'
        }
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Login realizado com sucesso!')

    })

    it('Não deve logar quando senha inválida', () => {
        const usuario = {
            email: 'teste.qa@gmail.com',
            password: 'Teste123!'
        }
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Credenciais inválidas. Verifique seu e-mail e senha.')

    })

    it('Não deve logar quando email inválido', () => {
        const usuario = {
            email: 'testeqa@gmail.com',
            password: 'Teste@123!'
        }
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Credenciais inválidas. Verifique seu e-mail e senha.')

    })

    it('Não deve logar quando dados em branco', () => {
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgErro('O campo de e-mail é obrigatório.')
        cy.verificarMsgErro('O campo de senha é obrigatório.')


    })

})