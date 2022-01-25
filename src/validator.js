const validator = {
  isValid: (numeroDetarjetaEnletras) => {
    // esta funcion nos debe arojar un booleano despues de ejecutarse el algoritmo
    if (isNaN(numeroDetarjetaEnletras)) {
      return false;
    }
    // una ves se recibe el numero y se convierte en un arregle de string
    const arregloDenumeros = numeroDetarjetaEnletras.split("");
    let convertirAnumero = arregloDenumeros.map((numero) => parseInt(numero));
    console.log(convertirAnumero);
    // Crea un arreglo con números en posiciones pares multiplicados por dos
    const arregloMultiplicadoPorDos = convertirAnumero.map((numero, indice) => {
      // Verifica que la posición sea par
      if (indice % 2 == 0) {
        numero = numero * 2;
        return numero;
      } else {
        return numero;
      }
    });
    console.log(arregloMultiplicadoPorDos);
    // Crea un arreglo con números en posiciones pares mayores a 10 sumando sus digitos
    const arregloMayorADiez = arregloMultiplicadoPorDos.map((numero, indice) => {
      // Verifica que la posición sea par
      if (indice % 2 == 0) {
        // Verifica que el número en la posición par sea mayor o igual a 10
        if (numero >= 10) {
          const digitos = numero.toString().split(""); // 14 => ["1", "4"];
          const digitosEnNumeros = digitos.map((numero) => parseInt(numero)); // ["1", "4"] => [1, 4];
          // Suma los digitos del número: [1, 4] => 5
          let sumadigitos = digitosEnNumeros.reduce((a, b) => a + b);
          numero = sumadigitos;
        }
        return numero;
      } else {
        return numero;
      }
    });
    console.log(arregloMayorADiez);
    // Suma el total de los números del arreglo anterior
    let sumatotal = arregloMayorADiez.reduce((a, b) => a + b);
    console.log(sumatotal);
    // Verifica si la suma total es multiplo de 10
    return sumatotal % 10 == 0;

  },
  maskify:(numeroDetarjetaEnletras) =>{
   return  numeroDetarjetaEnletras
  }

};

export default validator;
