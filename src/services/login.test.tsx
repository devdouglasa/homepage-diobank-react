import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Exibe um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Seja Bem vindo Douglas!')
    })
})