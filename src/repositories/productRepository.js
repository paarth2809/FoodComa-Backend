const Product = require('../schema/productSchema');

async function createProduct(productDetails) {
    try {
        const response = await Product.create(productDetails);
        return response;
    } catch(error) {
        console.log(error)
    }
}

async function getProductById(productId) {
    try {
        const product = await Product.findById(productId);
        return product;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

async function getAllProducts() {
    try {
        const products = await Product.find({});
        return products;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

async function deleteProductById(productId) {
    try {
        const response = await Product.findByIdAndDelete(productId);
        return response;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById
}