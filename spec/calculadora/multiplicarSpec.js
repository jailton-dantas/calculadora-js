describe("Suite de testes de multiplicaçao ", () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6)
    });

    it('Deve retornar 6 para 2 e 3 em formato texto', () => {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6)
    });
    
    it('Deve retornar 4.5 para 1.5 e 3 em formato texto', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5)
    });

    it('Deve retornar 0 para valor 1 invalido', () => {
        expect(Calculadora.multiplicar(undefined, 3)).toEqual(0)
    });

    it('Deve retornar 0 para valor 2 invalido', () => {
        expect(Calculadora.multiplicar(3, undefined)).toEqual(0)
    });


 

    

});