/// <reference types="cypress" />

import eCommercePage from '../pageObjects/eCommercePage.';

describe('E-commerce Product Checkout ', () => {

  const eCommerce = new eCommercePage(); 

  before(() => {
    eCommerce.authenticateUser(); 

  });

  it('Should search for a product, Add product to cart, Checkout a product', () => {

  eCommerce.searchAndAddProductToCart()

  });


});
