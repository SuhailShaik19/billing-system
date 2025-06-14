#  Billing System CLI

A simple, interactive command-line billing system built with **TypeScript**. This system allows users to order products, calculate totals, apply discounts, and process payments.

---

##  Table of Contents

- [Project Structure](#-project-structure)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Setup Instructions](#-setup-instructions)
- [Run the Project](#-run-the-project)
- [Git Workflow Used](#-git-workflow-used)



---

##  Project Structure
```bash
   src/

├ models/
│ |_ product.ts # Product, Order interfaces and types
├ data/
│ |_ product-list.ts # Sample product array
|- utils/
│ |_ helpers.ts # Utility function to fetch products
|- services/
│ |_ order.ts # Entire order processing logic

```
---

##  Features

-  View list of products
-  Enter orders interactively via CLI
-  Optional cup size for beverages
-  Calculates subtotal, discount, and total
-  Prints final bill
-  Confirms payment and completes the order

---

##  Technologies Used

- TypeScript
- Node.js


---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/billing-system.git
cd billing-system
```
### 2. Install dependencies
```bash
npm install
```
### 3. Install Type Definitions for readline-sync
```bash 
npm install --save-dev @types/readline-sync
```
## Run the Project

- Compile TypeScript:
```bash
npx tsc
```
- Run the app:
```bash
node dist/main.js
<<<<<<< HEAD
```
=======
``
>>>>>>> b9cee6d377f19faf64035e4ea228201d89f32e37
## Example Usage
```bash
----Items List-----
Product: coffee, Price: 120, Type: Vegan, Category: Beverages
...

Enter product Name: coffee
Enter Quantity: 2
Enter Cup Size: Large

Enter product Name: done

-------Final Bill--------
Product: coffee
Qty: 2
Item Price: 120
Cup Size: Large
Subtotal: ₹240
...
Discount Applied: ₹24
Total Amount: ₹216

Confirm payment? (yes/no): yes
Thank you! Ready for next customer.
```


## Git Workflow Used

- This project was built using a feature-branch strategy:

- feature/models – Added interfaces and types

- feature/data – Added product data

- feature/utils – Added helper functions

- feature/services – Implemented ordering logic

- feature/main – Integrated all modules in main.ts

- Each branch was tested and merged into the main branch.

## Author
- **Name** : Shaik Suhail




 
