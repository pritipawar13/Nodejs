// create the buffer 
// buffer size is 10 byte but all byte filled with 0's.
const buf1 = Buffer.alloc(10);
console.log(buf1);

// buffer size is 10 byte but all byte filled with 1's.
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// buffer containing a bytes 1,2,3
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)
// Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
// are all truncated using `(value & 255)` to fit into the range 0–255.
const buf5 = Buffer.from([257, 257.5, -255, '1']);
console.log(buf5)
// Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
// [116, 195, 169, 115, 116] (in decimal notation)
const buf6 = Buffer.from('tést');
console.log(buf6)
// Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf7 = Buffer.from('tést', 'latin1');
console.log(buf7)