function maskify(cc) {
    let mask_str = '';
    if (cc.length > 4) {
        for (let i = 0; i < cc.length-4; i++) {
            mask_str += '#';
        }
        mask_str += cc.slice(-4);
    } else {
        return cc;
    }
    return mask_str;
}
console.log(maskify("11"));                  // 11
console.log(maskify("34487328473"));         // #######8473