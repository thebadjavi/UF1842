/* 
    Dissenya una funció que trobi la paraula més llarga dintre de un vector i la retorni. 
    Algunes consideracions:  
       1. El vector contindrà, almenys, una paraula. 
       2. En cas que hi hagi més d'una paraula amb la mateixa longitud, cal retornar la paraula que ocupa una posició més propera al final del vector/array. 
     
    @param Array words   Vector amb un conjunt de strings. 
 
    @return String       Paraula més llarga del vector. En cas d'empat, retornar la paraula més propera al final del vector. 
 
*/
function findLongestWord(words) {
    
    for (var i = 0; i < words.length; i++) {
        var b = 0
        console.log("estoy aqui " +words[b]+" > "+words[i] )

        if (words[b].length >= words[i].length) {
           
            console.log("mayor "+words[b] )
            b++
         }
        else
            console.log("else ");

      }



}

console.log(findLongestWord(["patata", "ceba"])); // "patata"
//console.log(findLongestWord(["ceba", "patata"])); // "patata"
console.log(findLongestWord(["patata", "carbasso", "pebrot"])); // "carbasso"
//console.log(findLongestWord(["all", "sal", "gel"])); // "gel"  -- Totes les paraules tenen la mateixa longitud, però "gel" es la paraula que és més propera al final del vector/array.