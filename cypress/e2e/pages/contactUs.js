export class ContactUs{
    logo='img[src="//www.founderandlightning.com/hubfs/raw_assets/public/founderandlightning/assets/images/logos/logo-black.svg"]';
    link_home=':nth-child(1) > .nav-link';
    link_aboutUs='.navbar-nav > :nth-child(2) > .nav-link';
    link_approach=':nth-child(3) > #navbarDropdownMenuLink';
    link_portfolio=':nth-child(4) > #navbarDropdownMenuLink';
    link_resources=':nth-child(5) > #navbarDropdownMenuLink';
    link_careers=':nth-child(6) > .nav-link';
    input_firstName='#firstname-b15d4232-7672-429d-81fd-a00020bddf95';
    input_lastName='#lastname-b15d4232-7672-429d-81fd-a00020bddf95';
    input_email='#email-b15d4232-7672-429d-81fd-a00020bddf95';
    input_mobilePhone='#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95';
    select_hearAboutUs='#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95';
    textArea_message='#message-b15d4232-7672-429d-81fd-a00020bddf95';
    btn_sendMessage='input[type="submit"][value="Send Message >"]'
    link_top='.go-to-top'
    label_submitMessage='submitted-message > p';


    verifyPageLoad(){
        cy.url().should('include', '/contact');
        cy.get(this.logo,{timeout:5000}).should('be.visible');
    }

    verifyMessageConfirmation(){
        cy.get(this.label_submitMessage).should('have.text','Thank you for your message. We\'ll get back to you as soon as possible.');
    }

    verifyHeaderMenus(){
        cy.get(this.link_home).should('have.text', 'Home');
        cy.get(this.link_aboutUs).should('have.text', 'About us');
        cy.get(this.link_careers).should('have.text', 'Careers');
        cy.get(this.link_approach).should('contain', 'Our Approach');
        cy.get(this.link_portfolio).should('contain', 'Our Portfolio');
        cy.get(this.link_resources).should('contain', 'Resources');
    }

    verifyInputElements(){
        cy.get(this.input_firstName).should('exist');
        cy.get(this.input_lastName).should('exist');
        cy.get(this.input_email).should('exist');
        cy.get(this.input_mobilePhone).should('exist');
        cy.get(this.select_hearAboutUs).should('exist');
        cy.get(this.textArea_message).should('exist');
        cy.get(this.btn_sendMessage).should('exist');
    }

    fillInputForm(){
        cy.get(this.input_firstName).type('TestFirstName');
        cy.get(this.input_lastName).type('TestLastName');
        cy.get(this.input_email).type('TestFirstName@gmail.com');
        cy.get(this.input_mobilePhone).type('8765498765');
        cy.get(this.select_hearAboutUs).select('LinkedIn');
        cy.get(this.textArea_message).type('Test message');
        cy.get(this.btn_sendMessage).click()
    }

    validateErrorMessage(fieldName){
        cy.get('[class="hs-error-msg"][data-reactid*="'+fieldName+'"]').should('contain', 'Please complete this required field.');
    }
}