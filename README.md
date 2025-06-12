#  Product Utility Module

## Purpose
- This file contains utility functions that support the application’s core operations. The main functionality provided here is to search for a product by name from the list of available products.

## Function: getProductByName(name: string): Product | undefined
- Searches the product list and returns the matching product object based on the name entered by the user. The comparison is case-insensitive and trims extra whitespace.

- Parameters:
   - name (string) – The name of the product to look for.

- Returns:
   - A Product object if a match is found.

## Example Usage:
```bash```
import { getProductByName } from '../utils/helpers';

const product = getProductByName("cake");

if (product) {
  console.log("Product found:", product);
} else {
  console.log("Product not found.");
}

## Dependencies:
- Imports product list from ../data/product-list

- Uses Product interface/type from ../models/product







