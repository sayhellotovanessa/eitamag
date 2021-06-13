var value1 
var value2 
var value3 
var value4

function toggleReadingMode()
{
  var x = document.getElementsByClassName("site-header");
  if (x[0].style.display === "none") {
    x[0].style.display = value1;
  } else {
    value1 = x[0].style.display;
    x[0].style.display = "none";
  }
  var x = document.getElementsByClassName("site-footer");
  if (x[0].style.display === "none") {
    x[0].style.display = value2;
  } else {
    value2 = x[0].style.display;
    x[0].style.display = "none";
  }
  var x = document.getElementsByClassName("page-content");
  if (x[0].style.marginTop === "0px") {
    x[0].style.marginTop = value3;
  } else {
    value3 = x[0].style.marginTop;
    x[0].style.marginTop = "0px";
  }
  var x = document.getElementsByClassName("wrapper");
  if (x[0].style.maxWidth === "100%") {
    x[0].style.maxWidth = value4;
  } else {
    value4 = x[0].style.maxWidth;
    x[0].style.maxWidth = "100%";
  }  
}

function biggerFontSize()
{
  var x = document.getElementsByClassName("post-content");
  x[0].style.fontSize = "larger";
}

function smallerFontSize()
{
  var x = document.getElementsByClassName("post-content");
  x[0].style.fontSize = "smaller";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        toggleReadingMode();
    }
}

function activeReadMode() {
  
}

document.getElementById('reading-mode').addEventListener('click', function () {
  document.body.classList.toggle('read-mode');
});