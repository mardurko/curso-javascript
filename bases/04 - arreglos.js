const arreglo = [1, 2, 3, 4];

//let arreglo2 = arreglo.concat(5,6,7);
let arreglo2 = [...arreglo, 5, 6, 7];

let arreglo3 = arreglo2.map(function(x) {
  return x * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
