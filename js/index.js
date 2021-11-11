'use strict';

objetos();

function objetos() {
    const persona = { nombre: 'Javier' };

    persona.apellidos = 'Lete';
    persona['cargo'] = 'Profesor';
    // persona.apellido = 'Otro';

    persona.getNombreCompleto = function() {
        return `${this.nombre} ${this.apellidos}`;
    };

    console.log(persona);
    console.log(persona.nombre);
    console.log(persona['nombre']);
    console.log(persona.getNombreCompleto());

    //console.log(persona[prompt('Dime qué quieres ver')]);

    function Persona(nombre = 'Juan', apellidos = 'Nadie') {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    Persona.prototype.getNombreCompleto = function() {
        return `${this.nombre} ${this.apellidos}`;
    };

    const javier = new Persona('Javier', 'Lete');
    
    javier.profesion = 'Profesor';
    
    console.log(javier);
    console.log(javier.getNombreCompleto());

    const pepe = new Persona('Pepe');

    console.log(pepe);

    String.prototype.primeraLetra = function() {
        return this[0];
    };

    console.log('alksdjflkajsdg'.primeraLetra());
}

function arrays() {
    const arr = [ 5, 7 ];

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    arr[0] = 10;

    arr[2] = 25;
    arr[5] = 30;
    arr[8] = 'Hola';
    arr['casa'] = 'Home';
    arr.perro = 'Dog';

    arr.push('Nuevo');
    
    console.log(arr);

    for(let clave in arr) {
        console.log(clave, arr[clave]);
    }

    for(let dato of arr) {
        console.log(dato);
    }
}

function funciones() {
    
    console.log((n => n * n)(5));
    
    console.log((function (a, b) {
        return a / b;
    })(7, 3));
    
    const multiplicar = (a, b) => a * b;
    
    const restar = function (a, b) {
        return a - b;
    };
    
    function sumar(a, b) {
        return a + b;
    }
    
    
    function ejemploHoisting() {
        //console.log(n);
        const n = 'Javier';
        //n = 5;
        console.log(n);
        
        console.log(nombre);
        var nombre = 'Javier Lete';
        console.log(nombre);

        var nom;
        console.log(nom);
        nom = 'kasdjfkads'
        console.log(nom);
    }
    
    console.log(typeof ejemploHoisting);
    
    console.log(sumar);

    console.log(sumar());
    
    console.log(sumar(1, 2));
    console.log(restar(4, 3));
    console.log(multiplicar(2, 5));
    
    let op = sumar;
    
    console.log(op(6,5));
    
    op = restar;
    
    console.log(op(3,2));

    console.log(op());
}

function pedirNumero() {
    console.log('Hola a todos');

    var numero = parseInt(prompt('Dime un número'));

    if (isNaN(numero)) {
        console.log('No es un número burro...');
    }
    else {
        console.log(typeof numero);

        console.log(numero + 2);
    }
}

function pedirNombre() {
    var nombre = prompt('Como te llamas')

    if (nombre) {
        console.log('Hola ' + nombre);
    } else {
        console.log('Dame tu nombre');
    }
}

