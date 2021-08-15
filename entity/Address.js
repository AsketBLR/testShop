class Address{
    zip;
    city;
    street;

    /**
     * Constructor for address
     * @param {string} zip
     * @param {string} city
     * @param {string} street
     */
    constructor(zip, city, street) {
        this.zip = zip;
        this.city = city;
        this.street = street;
    }
    static parse(str){
        const object = JSON.parse(str);
        return new Address(object.zip, object.city, object.street);
    }
}

module.exports = Address