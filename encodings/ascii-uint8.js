import { log } from "node:console"

function asciiToBytes(string){
    return new TextEncoder().encode(string)
}

const string = "Vaishnavi"
console.log(asciiToBytes(string))
