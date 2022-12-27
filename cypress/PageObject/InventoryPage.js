class InventoryPage {
    navigate(){
        cy.visit('https://www.saucedemo.com/inventory.html');
    }

    addToCartBackpack(){
        cy.get('[id=add-to-cart-sauce-labs-backpack]')
        .click();
    }

    checkIfTheBubbleContainsOneProduct(){
        cy.get('[id=shopping_cart_container]')
        .contains('1');
    }
}

export default InventoryPage