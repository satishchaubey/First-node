//First Tarika 

const lib = require('./Lib.js');

console.log(lib.sum(2,5))

console.log(lib.multi(5,2))

console.log(lib.divi(4,2))

console.log(lib.incre(5,2))

//Second Tarika

// import {sum,multi,divi,incre} from './lib1.js'

// console.log(sum(2,5))

// console.log(multi(5,2))

// console.log(divi(4,2))

// console.log(incre(5,2))


// const fs = require('fs');

// const f1=performance.now();

// const doc=fs.readFileSync('./Doc.txt','utf-8')
// console.log(f1);
// console.log(doc);

// const f2=performance.now();
// fs.readFile('./Doc.txt','utf-8',(error,txt) =>{
//     console.log(txt);
// })
// console.log(f2);

// fs.readFile('./Doc.txt','ascii' ,(error,txt) =>{
//     console.log(txt);
// })

//-----------------------------------------------------------------------------------------------------------

const express = require('express');

const server = express();

console.log("hello")
console.log("Satish Chaubey Saloni")

server.listen(5000);