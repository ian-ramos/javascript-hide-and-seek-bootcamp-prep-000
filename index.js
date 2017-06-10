function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested')
}
function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}
function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
