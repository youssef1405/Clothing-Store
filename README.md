# Clothing Store

## Introduction

The app mimics an online store. The application should display products and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

This application has three slices of state:

- inventory: An array of objects representing the items that are available to purchase.
- cart: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- currencyFilter: A string that represents the currency used to calculate the prices displayed to the user: 'USD', 'CAD' or 'EUR'.

## Built with

- React
- Redux
- CSS3

## Demo

## How to Use

- git clone https://github.com/youssef1405/Clothing-Store.git
- CD to the project folder
- Run npm install in the terminal
- Run npm start
- The app runs on port 3000
