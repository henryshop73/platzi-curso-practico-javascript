// Creando un array que solo tenga los salarios

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

// Ordenamos nuestro array de salarios con sort de menor a mayor

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Calculamoos si la lista es par

function esPar(numerito) {
    return (numerito % 2 === 0);
}

// Calculando el promedio

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
       function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento
       }
   );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
   } 

// Calculamos la mediana de la lista de salarios

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    }else {
        const personitaMitad = lista[mitad]
        return personitaMitad;
    }
}
//  Llamamos a la funcion medianaSalarios y le enviamos una lista (salariosColoSorted)


console.log(
    medianaSalarios(salariosColSorted)
);