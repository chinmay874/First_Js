(function(window){
  var helloS= new Object();
  var speakW="Hello";
  helloS.speak= function(name){
    console.log(speakW + " " +name);
  };
  window.helloS = helloS;
})(window);
