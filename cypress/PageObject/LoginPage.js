class LoginPage {
    navigate(){
        cy.visit('https://www.saucedemo.com/');
    }

    enterEmail(userName){
        cy.get('[id=user-name]')
            .clear()
            .type(userName);
        return this
    }

    enterPassword(password){
        cy.get('[id=password]')
            .clear()
            .type(password);
        return this
    }

    submit(){
        cy.get('[id=login-button]')
            .click();
    }

    login(){
        this.navigate();
        this.enterEmail('standard_user');
        this.enterPassword('secret_sauce');
        this.submit();
    }
}

export default LoginPage