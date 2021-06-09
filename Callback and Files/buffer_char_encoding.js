const buf = Buffer.from('hello world', 'utf8');

// Word is converted into the hexadecimal form.
console.log(buf.toString('hex'));

// word is converted into the form which is base 64
console.log(buf.toString('base64'));

// word is converted into the utf8 form 
console.log(Buffer.from('fhqwhgads', 'utf8'));

// word is converted into utf16le form 
console.log(Buffer.from('fhqwhgads', 'utf16le'));