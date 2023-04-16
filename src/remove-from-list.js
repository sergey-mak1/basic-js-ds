

  function removeKFromList(l, k) {
    if (l.value == k){
      l = l.next;
    } 
    let list = l;
  
    while (list.next) {
      if (list.next.value == k) {
        list.next = list.next.next
      } else {
        list  = list.next
      }
    }
  
    return l
  }


module.exports = {
  removeKFromList
};
