/*
   La funció comprova si un número està entre el rang 'low' i el rang 'high'; ambdós inclosos.

   @param Number num   Número a comprovar entre rangs.
   @param Number low   Rang inferior.
   @param Number high  Rang superior.

   @return Boolean Retorna true si 'num' està dins el rang delimitat per 'low' i 'high'. Altrament, retorna false.

*/
function isInRange(num, low, high) {

   if(num>=low&&num<=high){
      //console.log("isInRange(5, 1, 10"); // true
    return true
   }
   else{
      return false
   }
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(0, 1, 10)); // false
console.log(isInRange(-10, -10, -10)); // true
console.log(isInRange(2, 2, 10)); // true. Pues el 2 está entre el rango de 2 a 10