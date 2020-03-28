var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        operadores: {
            '+': '/',
            '-': '*',
            '*': '-',
            '/': '+'
        },
        cadenas: [
            '3 * 2',
            '12 - 3',
            '6 + 2',
            '10 / 5',
            '6 - 4',
            '8 + 2',
            '9 - 2',
            '12 - 6',
            '10 + 5',
            '9 * 3',
            '10 / 3',
            '8 * 4',
            '12 * 9',
            '7 - 3',
            '8 / 6',
            '7 - 7',
            '6 - 5',
            '7 / 5',
            '9 - 8',
            '6 / 3',
            '9 / 3',
            '4 - 2',
            '14 * 13',
            '4 - 2',
            '8 + 4',
            '8 / 4',
            '16 / 3',
            '5 * 3',
            '9 - 3',
            '6 - 3',
            '10 - 3',
            '10 * 8',
            '15 + 5',
            '7 / 2',
            '13 * 10',
            '6 / 6',
            '11 / 4',
            '8 - 3',
            '12 + 6',
            '9 + 3',
        ]
    },
    methods: {
        convertirCadena: function (cadena) {
            let nuevaCadena = '';
            for (let i = 0; i < cadena.length; i++) {

                if (this.operadores.hasOwnProperty(cadena.charAt(i))) {
                    // if(this.operadores[cadena.charAt(i)])
                    nuevaCadena += this.operadores[cadena.charAt(i)];
                } else {
                    nuevaCadena += cadena.charAt(i);
                }
            }
            return nuevaCadena;
        },
        realizarOperacion: function (cadena) {
            try {

                let value = eval(cadena)
                return value.toFixed(2);
            } catch (error) {
                return 'Error';
            }
        }
    }
})