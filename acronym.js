function toAcronym(inp){
    let arr = inp.split(' ');
    let acronym = '';
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 1; j++) {
        acronym+=arr[i][j].toUpperCase();
      }
    }
    return acronym;
  }
console.log(toAcronym('Code wars'));   //CW
console.log(toAcronym('Youll newer walk alone'));     //YNWA