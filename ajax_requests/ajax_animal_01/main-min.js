
var myRequest = new XMLHttpRequest;
myRequest.open("GET","https://learnwebcode.github.io/json-example/animals-1.json#");

myRequest.onload = function(){
  var e = myRequest.responseText;
  console.log(e[0])
};
myRequest.send();
