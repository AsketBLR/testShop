require('dotenv').config({path: '../.env'})
const faker = require('faker');
const md5 = require('md5');
const User = require('../entity/User.js')
const Address = require("../entity/Address.js");

module.exports = async function main() {
    const promises = [];
    for (let i = 0; i <= 100; i++) {
        promises.push(await User.create({
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            password: md5('123'),
            address: new Address(faker.address.zipCode(), faker.address.city(), faker.address.streetAddress(true)),
            role: faker.random.arrayElement(Object.values(User.roles)),
        }))
    }
    promises.push(await User.create({
        name: 'admin',
        email: 'admin@admin.com',
        password: md5('123'),
        role: User.roles.admin
    }));
    return Promise.all(promises)
}
