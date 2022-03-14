/*1 - Run-Length Encoding
Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A), cant naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A"*/

lengthEnconding("AAAAAAAAAAAAABBCCCCDD");
lengthEnconding("aA");
lengthEnconding("122333");

function lengthEnconding(str){
  var encoded = "";

  let len = str.length;
  let cont = 1;
  for(var i=0; i<len; i++){
    cont = 1;
    // contar la cantidad de repetidos
    while(i<len-1 && str[i] == str[i+1]){
      if(cont > 8){
        encoded += cont + str[i];    
        cont = 0;
      }else{
        cont++;
        i++;
      }
    }
    encoded += cont + str[i];
  }
  console.log(encoded);
}