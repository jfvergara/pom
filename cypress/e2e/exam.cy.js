/// <reference types ="cypress" />
import LoginPage from "../PageObject/LoginPage";
import InventoryPage from "../PageObject/InventoryPage";
import CartPage from "../PageObject/CartPage";

describe("Cypress POM Test Suite", function () {
    it('Login with valid credentials', () => {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail('standard_user');
        login.enterPassword('secret_sauce');
        login.submit();
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    });

    it('Verify that a the red bubble is set with One product', () => {
        const Login = new LoginPage();
        const Inventory = new InventoryPage();
        Login.login();
        Inventory.addToCartBackpack();
        Inventory.checkIfTheBubbleContainsOneProduct();
    });

    it('Verify that a the red Backpack product is present in the Cart', () => {
        const Login = new LoginPage();
        const Inventory = new InventoryPage();
        const Cart = new CartPage();
        Login.login();
        Inventory.addToCartBackpack();
        Inventory.checkIfTheBubbleContainsOneProduct();
        Cart.clickOnCart();
        Cart.verifyIfBackpackIsPresentInTheCart();
    });
    
})