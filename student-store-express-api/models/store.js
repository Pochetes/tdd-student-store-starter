const { v4: uuidv4 } = require('uuid')
const { BadRequestError, NotFoundError } = require('../utils/errors')
const { storage } = require('../data/storage')

class Store {

    static fetchAllProducts() {
        const allProducts = storage.get('products').value()
        return allProducts
    }
}

module.exports = Store
