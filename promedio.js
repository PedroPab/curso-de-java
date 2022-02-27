const lista1 = [
    100,
    50,
    680,
    1000000,
    200,
    350,
    100000,
    100
];
//promedio
function calcularPromedio(lista){
    
    // let sumaLista1 = 0;
    // for(let i = 0 ; i < lista.length; i ++){
    //    sumaLista1 += lista[i];
    // }

    const sumaLista1 = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista1 / lista.length;
    return promedioLista;
}


//mediana 

function esPar(numero){
    if(numero % 2 === 0 ){
        return true
    }else{
        return false
    }
}

function calculrMediana(lista){
    var numerosOrdenados = lista.sort(function(a,b) {
        return a - b; })

    let mediana;
    
    const mitadLista = parseInt(lista.length /2);
    if (esPar(lista.length)){
        mediana = calcularPromedio([lista[mitadLista], lista[mitadLista - 1]]);
        
    }else{
        mediana = lista[mitadLista];
    }
    return mediana
}

//moda

function calcularModa(lista){
    const lista1Count = {};

    lista.map(function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;

        }else{
            lista1Count[elemento] = 1;
        }
    })
    const listaArray = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];    
        }
    )
    const moda = listaArray[listaArray.length - 1];
    return moda;
}

//media geometriaca

//media = raisn V x * x** x* x* x* 

function calculrMediaGeometrica(lista){

    const multiplicados = lista.reduce(function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado * nuevoElemento;
    })

    const mediaGeometrica = Math.pow(multiplicados, 1 / lista.length);
    return mediaGeometrica
}