const funciones = require('./Funciones/funciones')


console.log(funciones.leerArchivoComoString('./texto.txt'));
funciones.escribirTextoEnArchivo('./texto.txt',"Hello World again Testing!", true)
funciones.escribirTextoEnArchivo('./textoInexistente.txt',"Hello World again 3!", false)
funciones.escribirTextoEnArchivo('./textoInexistente.txt',"Hello World again 3!", true)
console.log(funciones.transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', '|'))
console.log(funciones.transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10]))
console.log(funciones.combinarDosArrays([1, 5, 10], [2, 3, 8, 11]))
console.log(funciones.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))