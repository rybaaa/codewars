function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = str.split(' ');
    let new_str = '';
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (vowels.includes(arr[i][j])) {
          continue;
        } else {
          new_str+=[arr[i][j]];
        }
      }
    new_str+=' ';
    }
    return new_str.slice(0, -1);
  }
  console.log(disemvowel("This website is for losers LOL!"))   //Ths wbst s fr lsrs LL!