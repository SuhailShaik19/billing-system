"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const product_list_1 = require("../data/product-list");
const helpers_1 = require("../utils/helpers");
function showProductList() {
    console.log('\n----Items List-----');
    product_list_1.products.forEach((product) => {
        console.log(`Product: ${product.name}, Price: ${product.price}, Type: ${product.pro_type}, Category: ${product.category}`);
    });
}
function collectOrders() {
    const orders = [];
    while (true) {
        const productName = readline.question('Enter product Name: ("Done" to close): ');
        if (productName.toLowerCase() === 'done')
            break;
        const product = (0, helpers_1.getProductByName)(productName);
        if (!product) {
            console.log('Invalid Item');
            continue;
        }
        const quantity = parseInt(readline.question('Enter Quantity: '), 10);
        let cupSize;
        if (product.category === 'Beverages') {
            cupSize = readline.question('Enter Cup Size: ');
        }
        orders.push({ product, quantity, cupSize });
    }
    return orders;
}
function calculateTotal(orders) {
    const total = orders.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discount = total > 1000 ? total * 0.1 : 0;
    const amount = total - discount;
    return { total, discount, amount };
}
function printFinalBill(orders, discount, amount) {
    console.log('\n-------Final Bill--------');
    orders.forEach((item) => {
        console.log(`Product: ${item.product.name}`);
        console.log(`Qty: ${item.quantity}`);
        console.log(`Item Price: ${item.product.price}`);
        if (item.cupSize)
            console.log(`Cup Size: ${item.cupSize}`);
        console.log(`Subtotal: ₹${item.product.price * item.quantity}`);
        console.log('-------');
    });
    if (discount > 0)
        console.log(`Discount Applied: ₹${discount}`);
    console.log(`Total Amount: ₹${amount}`);
}
function handlePayment() {
    const paid = readline.question('Confirm payment? (paid/not paid): ');
    if (paid.toLowerCase() === 'paid') {
        console.log('Thank you! Ready for next customer.');
    }
    else {
        console.log('Payment not received. Order cancelled.');
    }
}
function handleOrderFlow() {
    showProductList();
    const orders = collectOrders();
    const { discount, amount } = calculateTotal(orders);
    printFinalBill(orders, discount, amount);
    handlePayment();
    handleOrderFlow();
}
handleOrderFlow();
