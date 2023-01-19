//Ascending
function myFun() {
  const myVar = [1, 6, 49, 44, 12, 98, 81, 35, 45, 352, 2];
  myVar.sort(function (a, b) {
    return a - b;
  });
  document.getElementById('myId').innerHTML = myVar;
}

//Descending
function myFun2() {
  const myVar = [1, 6, 49, 44, 12, 98, 81, 35, 45, 352, 2];
  myVar.sort(function (a, b) {
    return b - a;
  });
  document.getElementById('myId2').innerHTML = myVar;
}
