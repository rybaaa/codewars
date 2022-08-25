function findShort(s){
    let arr = s.split(' ');
    let min_length = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < min_length.length) {
        min_length = arr[i];
      }
    }
    return min_length.length;
  }
  console.log(findShort('bitcoin take over the world maybe who knows perhaps'))   //shortest word is 'who' => number of letters = 3