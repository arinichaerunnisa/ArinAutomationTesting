const URL = 'http://zero.webappsecurity.com/'
const SIGN_IN = '#signin_button';
const USERNAME = '#user_login';
const PASSWORD = 'input[name=user_password]';
const CHEKBOX = 'name=user_remember_me';
const SUBMIT = 'name=submit';
const SEARCHBOX = 'id= searchTerm';


class Searchbox {
    static visit(){
        cy.visit(URL);
    }
    static clickButton(){
        cy.get(SIGN_IN).click()
    }
    static fillUsername() {
        cy.get(USERNAME).type('username'); 
    }
    static fillPassword() {
        cy.get(PASSWORD).type('password');
    }
    static chekBox(){
        cy.get(CHEKBOX).check();
    }
    static submitButton(){
        cy.get(SUBMIT).click();
    }
    static searchTerm(){
        cy.get(SEARCHBOX).type('online{enter}');
    }
}

export default SearchBox;
