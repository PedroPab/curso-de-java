function esPar(numerito){
    return (numerito % 2 === 0);
};

const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
//salarios colombia 
const salariosColSorted = salariosCol.sort(
    function (salarioA , salarioB){
        return salarioA - salarioB ;
    }
);

//promedio
function calcularPromedio(lista){
    const sumaLista1 = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista1 / lista.length;
    return promedioLista;
}


//mediana 
function medianaSalario(lista){
    const mitad = parseInt(lista.length / 2 );

    if(esPar){
        const persosnaMitad0 = lista[mitad - 1];
        const persosnaMitad1 = lista[mitad];

        const mediana = calcularPromedio([persosnaMitad0, persosnaMitad1]);
        return mediana
    }else{
        const persosnaMitad = lista[mitad];
        return persosnaMitad;
    }
}


//mediana top 10%
const top1 = 10;
const spliceStar = (salariosColSorted.length * (100 - top1)/ 100);
const spliceCount = salariosCol.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount);

const medianaGeneralCol = medianaSalario(salariosColSorted);
const medianaTop10Col = medianaSalario(salariosColTop10);

console.log({
    medianaGeneralCol, 
    medianaTop10Col
});