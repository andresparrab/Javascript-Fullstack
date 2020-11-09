const os = require('os');


//Platform
console.log(os.platform());

// CPU ARCH
console.log(os.arch())


//CPU core info
console.log(os.cpus())


//Free Memory
console.log('the free memory right now is : ', (os.freemem()/1000000000).toFixed(2), 'GB')

//Total Memomy
console.log('the Total memory right now is : ', (os.totalmem()/1000000000).toFixed(2), 'GB')

// Home dir
console.log(os.homedir())

// uptime
console.log(os.uptime())