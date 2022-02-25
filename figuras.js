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

function alturaIsosceles(lado0, lado1, base){//si no vas a mandarle parametro borralos, junto con los comentarios de abajo 
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

function alturaTriangulo(lado0, lado1){
    //como saber la altura de cualquir triangulo 
    // const lado0 , inputValue0 = parseInt(document.getElementById("inputTriangulo0").value); //lado0
    // const lado1 , inputValue1 = parseInt(document.getElementById("inputTriangulo1").value);// lado1
    // const base , inputValue2 = parseInt(document.getElementById("inputTriangulo2").value);//base 
    const respuestaTriangulo = document.getElementById("resultadosTriangulo");

    const senoAngulo = lado1 / lado0; 
    const altura = lado0 * senoAngulo;
    return altura;
    
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
    const respuestaCuadrado = document.getElementById("resultadosCuadrado");
    const perimetro = perimetroCuadrado(inputValue);

    //alert(perimetro);
    respuestaCuadrado.innerText = "el perimtro del cuadrado es de: " + perimetro;
}

function calcularAreaCuadrado(){
    const inputValue = parseInt(document.getElementById("inputCuadrado").value);
    const respuestaCuadrado = document.getElementById("resultadosCuadrado");
    const area = areaCuadrado(inputValue);
    //alert(area);
    respuestaCuadrado.innerText = "el area del cuadrado es de: " + area;

}
//traingulo
function  calcularPerimetroTriangulo(){
    const inputValue0 = parseInt(document.getElementById("inputTriangulo0").value);
    const inputValue1 = parseInt(document.getElementById("inputTriangulo1").value);
    const inputValue2 = parseInt(document.getElementById("inputTriangulo2").value);
    const respuestaTriangulo = document.getElementById("resultadosTriangulo");

    const perimetro = perimetroTriangulo(inputValue0, inputValue1, inputValue2);
    //alert(perimetro);
    respuestaTriangulo.innerText = "el perimtro del triangulo es de: " + perimetro;

}


function  calcularAreaTriangulo(){
   
    //const inputValue3 = parseInt(document.getElementById("inputTriangulo3").value);
    var inputValue0 , lado0 = parseInt(document.getElementById("inputTriangulo0").value); //lado0
    var inputValue1 , lado1 = parseInt(document.getElementById("inputTriangulo1").value);// lado1
    var inputValue2 , base = parseInt(document.getElementById("inputTriangulo2").value);//base 
    
    
    if(inputValue2 >= inputValue1 && inputValue2 >= inputValue0){
        

    }else if(inputValue0 >= inputValue1){
        inputValue0 = lado1;
        inputValue1 = base;
        inputValue2 = lado0;
    }else{
        inputValue0 = base;
        inputValue1 = lado1;
        inputValue2 = lado0;
    }
    const altura = alturaTriangulo(inputValue0, inputValue1) 
    const respuestaTriangulo = document.getElementById("resultadosTriangulo");

    const area = areaTriangulo(inputValue2, altura);
    //alert(area);
    respuestaTriangulo.innerText = "el area del triangulo es de: " + area;
}

//circulo 

function  calcularPerimetroCirculo(){
    const inputValue = parseInt(document.getElementById("inputCirculo").value);
    const respuestaCirculo = document.getElementById("resultadosCirculo");

    const perimetro = perimetroCirculo(inputValue);
    //alert(perimetro);
    respuestaCirculo.innerText = "el perimetro del Circulo es de: " + perimetro;
}


function  calcularAreaCirculo(){
    const inputValue = parseInt(document.getElementById("inputCirculo").value);
    const respuestaCirculo = document.getElementById("resultadosCirculo");

    const area = areaCirculo(inputValue);
    //alert(area);
    respuestaCirculo.innerText = "el area del Circulo es de: " + area;

}