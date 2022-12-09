var viewButtonList = document.getElementsByClassName('view-abstract');
var viewButton0 = document.getElementsByClassName('view-abstract')[0];
var viewButton1 = document.getElementsByClassName('view-abstract')[1];
var viewButton2 = document.getElementsByClassName('view-abstract')[2];
var viewButton3 = document.getElementsByClassName('view-abstract')[3];
var viewButton4 = document.getElementsByClassName('view-abstract')[4];
var viewButton5 = document.getElementsByClassName('view-abstract')[5];
var viewButton6 = document.getElementsByClassName('view-abstract')[6];

var collapseButtonList = document.getElementsByClassName('collapse-abstract');
var collapseButton0 = document.getElementsByClassName('collapse-abstract')[0];
var collapseButton1 = document.getElementsByClassName('collapse-abstract')[1];
var collapseButton2 = document.getElementsByClassName('collapse-abstract')[2];
var collapseButton3 = document.getElementsByClassName('collapse-abstract')[3];
var collapseButton4 = document.getElementsByClassName('collapse-abstract')[4];
var collapseButton5 = document.getElementsByClassName('collapse-abstract')[5];
var collapseButton6 = document.getElementsByClassName('collapse-abstract')[6];

var abstractTextList = document.getElementsByClassName('abstract');
var abstractText0 = document.getElementsByClassName('abstract')[0];
var abstractText1 = document.getElementsByClassName('abstract')[1];
var abstractText2 = document.getElementsByClassName('abstract')[2];
var abstractText3 = document.getElementsByClassName('abstract')[3];
var abstractText4 = document.getElementsByClassName('abstract')[4];
var abstractText5 = document.getElementsByClassName('abstract')[5];
var abstractText6 = document.getElementsByClassName('abstract')[6];

var hiddenAbstractList = document.getElementsByClassName('hidden');
var hiddenAbstract0 = document.getElementsByClassName('hidden')[0];

var viewAbstract = function(index) {
  viewButtonList[index].style.display = 'none';
  collapseButtonList[index].style.display = 'block';
  abstractTextList[index].style.display = 'block';
  hiddenAbstractList[index].style.visibility = 'visible';
  hiddenAbstractList[index].style.opacity= '1';

}

var collapseAbstract = function(index) {
  viewButtonList[index].style.display = 'block';
  collapseButtonList[index].style.display = 'none';
  abstractTextList[index].style.display = '-webkit-box';
  hiddenAbstractList[index].style.visibility = 'hidden';
  hiddenAbstractList[index].style.opacity= '0';
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

viewButton4.onclick = function() {
  viewAbstract(4)
}

collapseButton4.onclick = function() {
  collapseAbstract(4)
}

viewButton5.onclick = function() {
  viewAbstract(5)
}

collapseButton5.onclick = function() {
  collapseAbstract(5)
}

viewButton6.onclick = function() {
  viewAbstract(6)
}

collapseButton6.onclick = function() {
  collapseAbstract(6)
}