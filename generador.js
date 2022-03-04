const generador = [];
var nombres = ["pedro", "pablo" , "taborda", "juliana" , "maria" , "juan" , "jose", "mateo" , "pablo" , "ana", "pilar", "josefina", "fiona", "mora", "marta", "carlos"];
const generos = ["femenine", "macho", "otro"];
function generadorAleatorio(cantidad, lista){

    for (let index = 0; index < cantidad; index++) {

        const name = nombres[parseInt(nombres.length * Math.random())] + " " + nombres[parseInt(nombres.length * Math.random())];
        const genero =  generos[parseInt(generos.length * Math.random())];
        const edad = parseInt(Math.random() * 100);
        const salario =  parseInt(Math.random() * 10000);
        //console.log(name + " " + genero + " " + edad + " " + salario);
        lista.push({
            name: name,
            genero: genero,
            age: edad,
            salary: salario,
        })
        
    }
};

//console.log(generador);