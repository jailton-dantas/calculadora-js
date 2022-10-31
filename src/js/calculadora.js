var Calculadora = {
    adicionar: function(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            return 0;
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 + num2;
    }, 

    subtrair: function(num1, num2){
        if(isNaN(num1)|| isNaN(num2)){
            return 0;
        }
        return num1 - num2;
    },

    dividir: function(num1, num2){
        return 0;
    }, 
    multiplicar: function(num1, num2){
        return 0;
    },
};

//usado na função require do NodeJs
if (typeof module !== 'undefined'
    && typeof module.exports !== 'undefined'){
    module.exports = Calculadora;
}