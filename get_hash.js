const bcrypt = require('bcryptjs');
const password = 'kelola2288';
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
console.log(hash);
