function colourAssociation(array){
    let new_arr = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length - 1; j++) {
        let new_obj = {};
        new_obj[array[i][j]] = array[i][j+1];
        new_arr.push(new_obj);
      }
    }  
    return new_arr;
  }
  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));  //[ { white: 'goodness' }, { blue: 'tranquility' } ]