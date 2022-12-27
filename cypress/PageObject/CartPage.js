class CartPage {
    navigate(){
        cy.visit('https://www.saucedemo.com/cart.html');
    }

    clickOnCart(){
        cy.get('[id=shopping_cart_container')
        .click();
    }


    verifyIfBackpackIsPresentInTheCart(){
        cy.get('[id=item_4_title_link]')
        .contains('Sauce Labs Backpack');
    }
}

export default CartPage