import loginData from '../fixtures/login.json'

describe('Login', () => {
    beforeEach(() => {
        cy.acessarHome()
    })

    it('Login realizado com sucesso', () => {
        const usuario = loginData.perfilGestao
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Login realizado com sucesso!')
        cy.verificarUsuarioLogado(usuario.name)

    })

    it('Não deve logar quando senha inválida', () => {
        const usuario = { ...loginData.perfilGestao, password: 'Teste123!' }
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Credenciais inválidas. Verifique seu e-mail e senha.')

    })

    it('Não deve logar quando email inválido', () => {
        const usuario = { ...loginData.perfilGestao, email: 'testeqa@gmail.com' }
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Credenciais inválidas. Verifique seu e-mail e senha.')

    })

    it('Não deve logar quando dados em branco', () => {
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgErro('O campo de e-mail é obrigatório.')
        cy.verificarMsgErro('O campo de senha é obrigatório.')


    })

    it('Login perfil salão realizado com sucesso', () => {
        const usuario = loginData.perfilSalao
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Acesse através do app.')
    })

    it('Usuário do perfil salão deve acessar a aplicação pelo App', () => {
        const usuario = loginData.perfilSalao
        cy.preencherFormLogin(usuario.email, usuario.password)
        cy.clicarBtnSubmit('Acessar')
        cy.verificarMsgEsperada('Acesse através do app.')
        cy.verificarPage('app-info', 'Acesso pelo APP E2E Burguer')
    })

})