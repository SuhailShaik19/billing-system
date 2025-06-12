"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByName = getProductByName;
const product_list_1 = require("../data/product-list");
function getProductByName(name) {
    for (let i = 0; i < product_list_1.products.length; i++) {
        if (product_list_1.products[i].name.toLowerCase() === name.toLowerCase().trim()) {
            return product_list_1.products[i];
        }
    }
    return undefined;
}
