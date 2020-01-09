var fs=require('fs');
console.log('start');
const writefile =(err, file)=> {
    console.log('end write');
}
const readFile=(err, file) =>{
    console.log('end read');
    console.log('Content of the new file :' + file);
}
fs.writeFile('./file.json', 'hamza&yahya binome 05',writefile);
fs.readFile('./file.json', readFile);
console.log('end');
