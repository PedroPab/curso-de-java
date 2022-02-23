var unidadesDeMedides = [" cm", " pulgadas"];
var cm = " cm";
var cm2 = cm + "2";
console.group("Cuadrado");

//codigo de cuadrados

//const ladoCuadrado = 25;
//console.log("el lado del cuadrado es de : " + ladoCuadrado + cm);

function perimetroCuadrado(lado){
    return lado * 4 ;
} 
//console.log("el perimetro del cuadrado es de : " + perimetroCuadrado + cm);

function areaCuadrado(lado){
    return lado * lado ;
} 
//console.log("el area del cuadrado es de : " + areaCuadrado + cm2);

console.groupEnd();

//codigo de triangulos

console.group("trianguo");

// const ladoTriangulo0 = 50;
// const ladoTriangulo1 = 50;
// const baseTriangulo = 20;
// const alturaTriangulo = 5.5;

//console.log("los lados del triangulo es de: \n primer lado: " + ladoTriangulo0 + cm + " \n segundo lado: " + ladoTriangulo1 + cm + "\n terscer lado o base: " + baseTriangulo + cm + "\n y la altura de este es de: " + alturaTriangulo + cm);

function perimetroTriangulo(lado0, lado1, base){
    return lado0 + lado1 + base;
} 
//console.log("el perimetro del triangulo es de : " + perimetroTriangulo + cm);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("el area del triangulo es de : " + areaTriangulo + cm2);

console.groupEnd();

//codigo circulo

console.group("circulo");

// const radioCirculo = 50; 
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI; 

//console.log("el radio de la circuferencia es de: " + radioCirculo + cm);
//console.log("el diametro de la circuferencia es de: " + diametroCirculo + cm)

function circuferenciaCirculo(radio){
    const diametro = radio * 2;
    return diametro * pi;
}
//console.log("la circuferencia del circulo es de: " + circuferenciaCirculo + cm);

function areaCirculo(radio){
    (radio * radio) * pi;
}

//console.log("el ara del circulo es de: " + areaCirculo + cm2);
