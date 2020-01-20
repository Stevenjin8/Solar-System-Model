(function() {

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("field");
  var earth = document.getElementById("halley");

  var maxX = 00;
  var maxY = 1150;

  var duration = 450; // seconds
  var gridSize = 220; // pixels

  var start = null;
  var stretchFactor;

  function step(timestamp)
  {
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      stretchFactor = 2;
    }

    progress = (timestamp - start) / duration / 1000; // percent


    x = stretchFactor * Math.sin(progress * 2 * Math.PI) * 0.4; // y = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI) * 0.4;
      
    document.getElementById("halley").style.left = (maxX/2 + (gridSize * x)) + 170  * -1+ "px";
    document.getElementById("halley").style.bottom = (maxY/2 + (gridSize * y)) + 425 * -1 + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

})();

(function() {

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("ikeya");
  var earth = document.getElementById("halley");

  var maxX = 00;
  var maxY = 1150;

  var duration = 1098; // seconds
  var gridSize = 220; // pixels

  var start = null;
  var stretchFactor;

  function step(timestamp)
  {
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      stretchFactor = 2;
    }

    progress = (timestamp - start) / duration / 1000; // percent


    x = stretchFactor * Math.sin(progress * 2 * Math.PI) * 0.8; // y = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI) * 0.4;
      
    document.getElementById("ikeya").style.left = ((maxX/2 + (gridSize * x))) + 370 + "px";
    document.getElementById("ikeya").style.bottom = ((maxY/2 + (gridSize * y))) + -475 + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

})();