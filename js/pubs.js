var viewButtonList = document.getElementsByClassName('view-abstract');
var viewButton0 = document.getElementsByClassName('view-abstract')[0];
var viewButton1 = document.getElementsByClassName('view-abstract')[1];
var viewButton2 = document.getElementsByClassName('view-abstract')[2];
var viewButton3 = document.getElementsByClassName('view-abstract')[3];

var collapseButtonList = document.getElementsByClassName('collapse-abstract');
var collapseButton0 = document.getElementsByClassName('collapse-abstract')[0];
var collapseButton1 = document.getElementsByClassName('collapse-abstract')[1];
var collapseButton2 = document.getElementsByClassName('collapse-abstract')[2];
var collapseButton3 = document.getElementsByClassName('collapse-abstract')[3];

var abstractTextList = document.getElementsByClassName('abstract');
var abstractText0 = document.getElementsByClassName('abstract')[0];
var abstractText1 = document.getElementsByClassName('abstract')[1];
var abstractText2 = document.getElementsByClassName('abstract')[2];
var abstractText3 = document.getElementsByClassName('abstract')[3];

var viewAbstract = function(index) {
  viewButtonList[index].style.display = 'none';
  collapseButtonList[index].style.display = 'block';
  abstractTextList[index].style.display = 'block';
}

var collapseAbstract = function(index) {
  viewButtonList[index].style.display = 'block';
  collapseButtonList[index].style.display = 'none';
  abstractTextList[index].style.display = '-webkit-box';
}

viewButton0.onclick = function() {
  viewAbstract(0)
}

collapseButton0.onclick = function() {
  collapseAbstract(0)
}

viewButton1.onclick = function() {
  viewAbstract(1)
}

collapseButton1.onclick = function() {
  collapseAbstract(1)
}

viewButton2.onclick = function() {
  viewAbstract(2)
}

collapseButton2.onclick = function() {
  collapseAbstract(2)
}

viewButton3.onclick = function() {
  viewAbstract(3)
}

collapseButton3.onclick = function() {
  collapseAbstract(3)
}