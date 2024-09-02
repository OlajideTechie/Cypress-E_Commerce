
class eCommercePage {

  //Here user navigates to the ecommerce page 
  authenticateUser() {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.list-inline > .dropdown > .dropdown-menu')
    .contains('Login')
    .click();

    cy.get('#input-email').type('test-commerce@gmail.com')
    cy.get('#input-password').type('qwertyu1')
    cy.get('form > .btn').click()

  }

  
  searchAndAddProductToCart() {
    
    //Wait for product page to load
    cy.get('.form-control', { timeout: 10000 }).type('macbook');
    cy.get('.input-group-btn > .btn', { timeout: 10000 }).click();
    
    //pick a product
    cy.get(':nth-child(3) > .product-thumb > :nth-child(2) > .caption > h4 > a').click()
  

    //Add product to cart 
    cy.get('#button-cart').click();

   //Checkout product
    cy.get('.btn-inverse').click()
    cy.get('#cart > .dropdown-menu')

    cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout"] > strong').click();

    cy.get('#button-payment-address').click();

    //cy.get('[type="checkbox"]').check()

    cy.get('#button-shipping-address').click();
    cy.get('#button-shipping-method').click();
    cy.get('[type="checkbox"]').check();
    cy.get('#button-payment-method').click();

    //confirm order 
    cy.get('#button-confirm').click();
    cy.get('h1').should('have.text', 'Your order has been placed!');
    
    //Log out user 
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.list-inline > .dropdown > .dropdown-menu')
    .contains('Logout')
    .click();

    cy.get('.pull-right > .btn').click();
  
    

  }

  
}


module.exports = eCommercePage;
