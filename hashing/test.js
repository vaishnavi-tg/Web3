import crypto from 'crypto';

const input = "vaishnavi"
const hash = crypto.createHash('sha256').update(input).digest('hex')

console.log(hash)