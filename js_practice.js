//sort array with 2 loops and swap

var list = [3,1,5,2,4,9,7,6,8];
//console.log(list.length);


function SelectionSort(list) {
  for(var i=0; i < list.length;  i++) {
    var smallestElement = list[i]
    for(var j=i+1; j < list.length;  j++) {
      if(smallestElement > list[j]) {
        smallestElement = list[j]
      }
    }
    swap(list, smallestElement, list[i])
  }
};

SelectionSort(list);
//swap(list, 0, 1);

function swap(list, element1, element2){
    var index1 = list.findIndex(e => e == element1);
    var index2 = list.findIndex(e => e == element2);
    var tmp = list[index1];
    list[index1] = list[index2];
    list[index2] = tmp;
}

console.log(list);
