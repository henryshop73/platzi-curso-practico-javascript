// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

// console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//    + baseTriangulo 
//    + "cm"
//    );

//    const alturaTriangulo = 5.5;
//    console.log("la altura del triángulo es de: " + alturaTriangulo + "cm");

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    // console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
    
    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

    console.groupEnd();

    // Código del círculo
    console.group("Círculos");

    // Radio
    // const radioCirculo = 4;
    // console.log("El radio del círculo es: " + radioCirculo + "cm");

    // Diámetro
    function diametroCirculo(radio) {
        return radio * 2;
    }

    // Pi
    const PI = Math.PI;
    console.log("PI es: " + PI);

    // Circunferencia
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    // Area
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }

    console.groupEnd();

    // Aquí interactuamos con el HTML
    // Cuadrado
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }
    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);
    }

    // Triángulo
    function calcularPerimetroTriangulo() {
        const input1 = document.getElementById("InputTriangulo1");
        const value1 = Number(input1.value);
        const input2 = document.getElementById("InputTriangulo2");
        const value2 = Number(input2.value);
        const base = document.getElementById("InputTrianguloBase");
        const value3 = Number(base.value);
      
        const perimetro = perimetroTriangulo(value1,value2,value3);
        alert(perimetro);      
    }
    function calcularAreaTriangulo() {
        const base = document.getElementById("InputTrianguloBase");
        const value1 = Number(base.value);
        const altura = document.getElementById("InputTrianguloAltura");
        const value2 = Number(altura.value);

        const area = areaTriangulo(value1,value2);
        alert(area);
    }
    
    //Círculo
    function calcularDiametroCirculo() {
        const input1 = document.getElementById("InputRadio");
        const value1 = input1.value;

        const diametro = diametroCirculo(value1);
        alert(diametro);
    }
    function calcularPerimetroCirculo() {
        const input2 = document.getElementById("InputRadio");
        const value2 = input2.value;

        const perimetro = perimetroCirculo(value2);
        alert(perimetro);
    }
    function calcularAreaCirculo() {
        const input3 = document.getElementById("InputRadio");
        const value3 = input3.value;

        const area = areaCirculo(value3);
        alert(area);
    }