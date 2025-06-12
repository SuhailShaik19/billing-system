import readline = require('readline-sync');
import { products } from '../data/product-list';
import { getProductByName } from '../utils/helpers';
import { CupSize, Order } from '../models/product';

function showProductList(): void {
  console.log('\n----Items List-----');
  products.forEach((product) => {
    console.log(
      `Product: ${product.name}, Price: ${product.price}, Type: ${product.pro_type}, Category: ${product.category}`
    );
  });
}

function collectOrders(): Order[] {
  const orders: Order[] = [];

  while (true) {
    const productName = readline.question('Enter product Name: ("Done" to close): ');
    if (productName.toLowerCase() === 'done') break;

    const product = getProductByName(productName);
    if (!product) {
      console.log('Invalid Item');
      continue;
    }

    const quantity = parseInt(readline.question('Enter Quantity: '), 10);
    let cupSize: CupSize | undefined;

    if (product.category === 'Beverages') {
      cupSize = readline.question('Enter Cup Size: ') as CupSize;
    }

    orders.push({ product, quantity, cupSize });
  }

  return orders;
}

function calculateTotal(orders: Order[]): { total: number; discount: number; amount: number } {
  const total = orders.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = total > 1000 ? total * 0.1 : 0;
  const amount = total - discount;
  return { total, discount, amount };
}

function printFinalBill(orders: Order[], discount: number, amount: number): void {
  console.log('\n-------Final Bill--------');
  orders.forEach((item) => {
    console.log(`Product: ${item.product.name}`);
    console.log(`Qty: ${item.quantity}`);
    console.log(`Item Price: ${item.product.price}`);
    if (item.cupSize) console.log(`Cup Size: ${item.cupSize}`);
    console.log(`Subtotal: ₹${item.product.price * item.quantity}`);
    console.log('-------');
  });

  if (discount > 0) console.log(`Discount Applied: ₹${discount}`);
  console.log(`Total Amount: ₹${amount}`);
}

function handlePayment(): void {
  const paid = readline.question('Confirm payment? (yes/no): ');
  if (paid.toLowerCase() === 'yes') {
    console.log('Thank you! Ready for next customer.');
  } else {
    console.log('Payment not received. Order cancelled.');
  }
}


  function handleOrderFlow() {
  showProductList();
  const orders = collectOrders();
  const { discount, amount } = calculateTotal(orders);
  printFinalBill(orders, discount, amount);
  handlePayment();
}
handleOrderFlow();