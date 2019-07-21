function logDriverNames(arr){
arr.forEach(function(element) {
  console.log(element.name);
});

   }

   function logDriversByHometown(arr,obj){
arr.forEach(function(element) {
  if(element.hometown===obj){
  console.log(element.name);}
});

   }
  function driversByRevenue(arr){

     arr.sort(
      function (a, b) {return a.revenue - b.revenue;}
      );
  return arr;
 }
 function driversByName(arr){
 arr.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

   // names must be equal
  return 0;
});
return arr;
} 