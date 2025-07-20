function AsciiToBytes(string) {
    const byteArray = []
    for (i = 0; i < string.length; i++) {
        byteArray.push(string.charCodeAt(i))
    }
    return byteArray
}

string = "Vaishnavi"
console.log(AsciiToBytes(string))