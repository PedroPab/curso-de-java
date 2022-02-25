var unidadesDeMedides = [" cm", " pulgadas"];
var cm = " cm";
var cm2 = cm + "2";
//console.group("Cuadrado");

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

//console.groupEnd();

//codigo de triangulos

///console.group("trianguo");

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

function alturaIsosceles(lado0, lado1, base){//si no vas a mandarle parametro borralos junto con lo comentarios de abajo 
    // const lado0 , inputValue0 = parseInt(document.getElementById("inputTriangulo0").value); //lado0
    // const lado1 , inputValue1 = parseInt(document.getElementById("inputTriangulo1").value);// lado1
    // const base , inputValue2 = parseInt(document.getElementById("inputTriangulo2").value);//base 


    if(lado0 === lado1){
        const altura = Math.sqrt((lado0 * lado0) - ((base * base)/ 4));
        if(altura == NaN){
            console.log("no concuerdan las medidas");
        }
        return altura;
    }else{
        console.log("no es un triangulo isosceles, corrige los lados del triangulo");
    }
}
//console.log("el area del triangulo es de : " + areaTriangulo + cm2);

//console.groupEnd();

//codigo circulo

//console.group("circulo");

// const radioCirculo = 50; 
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI; 

//console.log("el radio de la circuferencia es de: " + radioCirculo + cm);
//console.log("el diametro de la circuferencia es de: " + diametroCirculo + cm)

function perimetroCirculo(radio){
    const diametro = radio * 2;
    return diametro * pi;
}
//console.log("la circuferencia del circulo es de: " + circuferenciaCirculo + cm);

function areaCirculo(radio){
    return (radio * radio) * pi;

}

//console.log("el ara del circulo es de: " + areaCirculo + cm2);


//interaccion con html
//cuadrado 

function  calcularPerimetroCuadrado(){
    const inputValue = parseInt(document.getElementById("inputCuadrado").value);

    const perimetro = perimetroCuadrado(inputValue);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const inputValue = parseInt(document.getElementById("inputCuadrado").value);

    const area = areaCuadrado(inputValue);
    alert(area);

}
//traingulo
function  calcularPerimetroTriangulo(){
    const inputValue0 = parseInt(document.getElementById("inputTriangulo0").value);
    const inputValue1 = parseInt(document.getElementById("inputTriangulo1").value);
    const inputValue2 = parseInt(document.getElementById("inputTriangulo2").value);

    const perimetro = perimetroTriangulo(inputValue0, inputValue1, inputValue2);
    alert(perimetro);

}


function  calcularAreaTriangulo(){
    const inputValue2 = parseInt(document.getElementById("inputTriangulo2").value);
    const inputValue3 = parseInt(document.getElementById("inputTriangulo3").value);

    const area = areaTriangulo(inputValue2, inputValue3);
    alert(area);

}

//circulo 

function  calcularPerimetroCirculo(){
    const inputValue = parseInt(document.getElementById("inputCirculo").value);

    const perimetro = perimetroCirculo(inputValue);
    alert(perimetro);

}

function  calcularAreaCirculo(){
    const inputValue = parseInt(document.getElementById("inputCirculo").value);

    const area = areaCirculo(inputValue);
    alert(area);

}