const fs = require('fs')
const path = require('path')

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err  => {
//     if (err) throw err;
//     console.log('Folder created...')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, './test',' hello.txt'), 
// 'Hello Worlds', 
//         err => {
//         if (err) throw err;
//     console.log('File written to......');

// fs.appendFile(path.join(__dirname, './test',' hello.txt'), 
// 'I love Node.js', 
//         err => {
//         if (err) throw err;
//     console.log('File written to......')
//         })
// })

// Read file 
// fs.readFile(path.join(__dirname, './test',' hello.txt'),
// 'utf8',
// (err,data)  => {
//         if (err) throw err;
//     console.log('Readin from file ....')
//     console.log(data)
//         })

// Rename file 
fs.rename(path.join(__dirname, './test',' hello.txt'),path.join(__dirname, './test',' helloWolrd.txt'),
(err)  => {
        if (err) throw err;
    console.log('Renaming file ....')
    
        })