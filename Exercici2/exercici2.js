/*
    Dissenya una funció, que en funció del parámetre 'operation', suma o resta els números a les posicions 'position1' i 'position2' del vector. El primer operand sempre serà el número ubicat a la 'position1' del vector, i el segon operand, sempre serà el número ubicat a la 'position2' del vector.

    @param Array arrayNumbers   Vector amb un conjunt de números enters
    @param Number position1     Posició que ocupa el primer nombre a operar
    @param Number position2     Posició que ocupa el segon nombre a operar 
    @param String operation     Tipus d'operació. Pot ser "add" o "subtract" 

    @return Number              Resultat de l'operació.


*/

function add_or_subtract(arrayNumbers, position1, position2, operation) {

    switch(operation) {
        case "add":
            console.log( "add"); // 3
            resultado=arrayNumbers[position1] +arrayNumbers[position2]
            console.log( resultado); // 3

            break;
        case "subtract":
 
            console.log( "subtract"); // 3
            resultado=arrayNumbers[position1] -arrayNumbers[position2]

            //resultado=arrayNumbers.slice(position1, position2);
            console.log( resultado); // 3

          break;
        default:
       }

}

console.log(add_or_subtract([1, 2, 3], 0, 1, "add")); // 3
console.log(add_or_subtract([1, 2, 3], 0, 1, "subtract")); // -1
console.log(add_or_subtract([1, 2, 3, 4, 5], 1, 4, "add")); // 7