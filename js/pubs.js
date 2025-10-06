var viewButtonList = document.getElementsByClassName('view-abstract');
var collapseButtonList = document.getElementsByClassName('collapse-abstract');
var abstractTextList = document.getElementsByClassName('abstract');
var hiddenAbstractList = document.getElementsByClassName('hidden');

// Collapse all abstracts
var collapseAll = function() {
  for (let i = 0; i < viewButtonList.length; i++) {
    viewButtonList[i].style.display = 'block';
    collapseButtonList[i].style.display = 'none';
    abstractTextList[i].style.display = '-webkit-box';
    hiddenAbstractList[i].style.visibility = 'hidden';
    hiddenAbstractList[i].style.opacity = '0';
  }
};

// Open selected abstract and close others
var viewAbstract = function(index) {
  collapseAll();
  viewButtonList[index].style.display = 'none';
  collapseButtonList[index].style.display = 'block';
  abstractTextList[index].style.display = 'block';
  hiddenAbstractList[index].style.visibility = 'visible';
  hiddenAbstractList[index].style.opacity = '1';
};

var collapseAbstract = function(index) {
  viewButtonList[index].style.display = 'block';
  collapseButtonList[index].style.display = 'none';
  abstractTextList[index].style.display = '-webkit-box';
  hiddenAbstractList[index].style.visibility = 'hidden';
  hiddenAbstractList[index].style.opacity = '0';
};

// Attach handlers dynamically
for (let i = 0; i < viewButtonList.length; i++) {
  viewButtonList[i].onclick = () => viewAbstract(i);
  collapseButtonList[i].onclick = () => collapseAbstract(i);
}