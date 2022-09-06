import {ContactUs} from '../pages/contactUs';
var contactUs=new ContactUs();

describe('Test Founder and Lightning contact page', () => {
    it('Contact page load successfully', () =>{
        cy.visit('https://www.founderandlightning.com/contact');     
        contactUs.verifyPageLoad();
    })

    it('Contact page headers are present', () =>{
        contactUs.verifyHeaderMenus();
        //Similarly we can test for other elements present on page like fotter elements etc
    })

    it('Contact page input elements are present', () =>{
        contactUs.verifyInputElements();

    })
    
    it('Contact page go to top functionality', () =>{
        cy.scrollTo('bottom')
        cy.get(contactUs.link_top).click();
    })

    it('Contact page mandatory field error validation', () =>{
        cy.get(contactUs.btn_sendMessage).click();
        contactUs.validateErrorMessage('firstname');
        contactUs.validateErrorMessage('lastname');
        contactUs.validateErrorMessage('email');
        contactUs.validateErrorMessage('mobilephone');
        contactUs.validateErrorMessage('message');
    })
    
    it('Contact page message sent validation', () =>{
        contactUs.fillInputForm();
        contactUs.verifyMessageConfirmation();

    })

})