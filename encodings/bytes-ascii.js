function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join(',')
}

byteArray = [97 , 56, 78, 75]
console.log(bytesToAscii(byteArray))