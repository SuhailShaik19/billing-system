# TypeScript Order System - Models

This file documents the **core data models** used in the TypeScript-based CLI Order System project. These types and interfaces define the structure for products, orders, categories, and cup sizes.

---

## ProductType

Represents the dietary category of a product.

## CupSize

- Specifies available cup sizes for beverages.

## Category

- Represents the general classification of a product.

## Product Interface

- Defines the structure of each product available for order.

## Order Interface

- Defines the structure of a customer's order.

#  Product Data Module

This module exports a static list of products that can be used throughout the application. Each product follows a specific structure defined by the `Product` interface located in `../models/product`.

## Purpose
The file provides mock product data to simulate an inventory or catalog for applications such as:
- E-commerce platforms
- Order system
- POS (Point of Sale) interfaces

##  Dependencies
  ```bash```
    import { Product } from '../models/product';

## Usage
- This product list can be used in modules like:

    - Product listing pages

    - Search/filter functionality

    - Checkout/cart system




