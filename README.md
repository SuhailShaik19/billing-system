#  Order Service - Billing System

This module manages the complete order processing flow of the billing system. It includes functionality to:

- Display the product list
- Collect customer orders
- Calculate total amount with discounts
- Print the final bill
- Handle payment confirmation

---

##  Features

###  `showProductList()`
- Prints a list of all available products with:
  - Name
  - Price
  - Type
  - Category

###  `collectOrders()`
- Repeatedly prompts user to enter product name and quantity.
- If the product is from Beverages, asks for cup size.
- Returns an array of orders.

###  `calculateTotal(orders: Order[])`
- Calculates:
  - `total` – Raw total cost
  - `discount` – 10% discount for orders above ₹1000
  - `amount` – Final amount after discount

###  `printFinalBill(orders, discount, amount)`
- Displays detailed bill:
  - Product-wise breakdown
  - Quantity, price, subtotal
  - Total discount and payable amount

###  `handlePayment()`
- Prompts user for payment confirmation.
- Displays a thank you message or cancellation.

###  `handleOrderFlow()`
- Main function that:
  1. Shows product list
  2. Collects orders
  3. Calculates billing totals
  4. Prints the bill
  5. Handles payment

---

##  Dependencies

- `readline-sync`: For interactive CLI input  
  > If TypeScript throws an error, run:
  ```bash
  npm install readline-sync
  npm install --save-dev @types/readline-sync

  
- products from ../data/product-list

- getProductByName from ../utils/helpers

- CupSize, Order interfaces from ../models/product

##  Sample CLI Usage
  ```bash
  ----Items List-----
Product: Tea, Price: 20, Type: Hot, Category: Beverages
...

Enter product Name: coffee
Enter Quantity: 2
Enter Cup Size: Medium

...

-------Final Bill--------
- Product: Coffee
- Qty: 2
- Item Price: 40
- Cup Size: Medium
- Subtotal: ₹80
...
- Total Amount: ₹72

## Author 
- ***Name** : Shaik Suhail
- ***Contact*** : suhail.shaik@everest.engineering
