(function(window){
  var byeS = new object();
  var speakW="Good Bye";
  byeS.speak= function speak(name){
    console.log(speakW + " " + name);
  };
  window.byeS = byeS;
})(window);
