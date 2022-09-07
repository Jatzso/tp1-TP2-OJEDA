const fs = require('fs');

function leerArchivoComoString(ruta) {
    let txt = fs.readFileSync(ruta, 'utf-8')
    return txt
}
                                             
function escribirTextoEnArchivo(ruta, texto, flag){
    try {
        if(fs.existsSync(ruta)){
        console.log("Ruta encontrada...")
        console.log("Escribiendo el texto \'" + texto + "\'")
        fs.writeFileSync(ruta, texto)
    }else{
        if(flag == true){
            console.log("Creando archivo...")
            console.log("Escribiendo el texto \'" + texto + "\' en el nuevo archivo")
            fs.writeFileSync(ruta, texto)
        }else{
            throw Error("Error de escritura")
        }
    }
    } catch (error) {
        console.log(error.message)
    }
    
}

function transformarStringEnArrayDeNumeros(cadena, separador) {
    let arr = cadena.split(separador)
    const reg = new RegExp('[A-Za-z]')
    for (let i = 0; i < arr.length; i++) {
        if(reg.test(arr[i])){
            let index = arr.indexOf(arr[i])
            arr.splice(index, 1)
        }
        
    }
    return arr
}

function transformarArrayDeNumerosAUnSoloString(arr){
    let str = arr.toString()
    return str
}

function combinarDosArrays(arr1, arr2){
    let arr3 = arr1.concat(arr2).sort((a,b) => a -b)
    return arr3
}

function combinarNArrays(arr) {
    let arrayCombinado = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arrayCombinado.push(arr[i][j])
        }
    }
    arrayCombinado.sort((a,b) => a-b)
    return arrayCombinado
}

module.exports = {
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays,
}
