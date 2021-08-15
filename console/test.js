const Address = require('../entity/Address.js')

address = new Address('zip', 'city', 'street')
console.log(JSON.stringify(address))