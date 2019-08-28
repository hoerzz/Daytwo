function balikKata(kata) {
  var a='';
  for(var i=kata.length -1; i >=0; i--){
  a=a+kata[i]; 
  }
  return a;
} 

console.log(balikKata('hello world!'));