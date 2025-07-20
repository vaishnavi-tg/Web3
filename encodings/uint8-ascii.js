function bytesToAscii(byteArray){
    return new TextDecoder().decode(byteArray)
}

byteArray = new Uint8Array([23,67,89,113,56,79])
console.log(bytesToAscii(byteArray))