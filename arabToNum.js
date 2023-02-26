function arabToNum(s) {
    let firstSymbol = 0;
    let nextSymbol = 0;
    let output = 0;
        for (let i = s.length; i >= 0; i--) {
            switch(s.charAt(i)){ //charAt() is a method that returns the character from the specified index
                case 'I': firstSymbol = 1; break;
                case 'V': firstSymbol = 5; break;
                case 'X': firstSymbol = 10; break;
                case 'L': firstSymbol = 50; break;
                case 'C': firstSymbol = 100; break;
                case 'D': firstSymbol = 500; break;
                case 'M': firstSymbol = 1000; break;
            }
            // Here is the condition
            if ( nextSymbol > firstSymbol) {
                output -= firstSymbol;
            }else{
                output += firstSymbol;
                nextSymbol = firstSymbol;
            }
           
        }
        return output;
}  console.log(arabToNum('MCMXCIV'))

// Să se scrie cu cifre arabe un număr cu cifre romane
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "MCMXCIV"
// Output: 1994
