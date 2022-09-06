function digitalRoot(n) {
    let sum = 0;
    if (String(n).length > 1) {
        for (i=0; i < String(n).length; i++) {
            sum+=+String(n)[i];
        }
    }
    if (String(sum).length>1) {
        return digitalRoot(sum);
    } else {
        return sum;
    }
}
console.log(digitalRoot(567))  //5+6+7=18  => 1+8=9