Array.prototype.remove_ = function(integer_list, values_list){
    let new_arr = [];
    for (let i = 0; i < integer_list.length; i++) {
        if (values_list.includes(integer_list[i])) {
            continue;
        } else {
            new_arr.push(integer_list[i]);
        }
    }
    return new_arr;
  }
console.log(Array.prototype.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))   //[ 2, 2, 4 ]