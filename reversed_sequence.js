const reverseSeq = n => {
    let result = [];
    for (i=1; i <= n; i++) {
      result.unshift(i);
    }
    return result;
};