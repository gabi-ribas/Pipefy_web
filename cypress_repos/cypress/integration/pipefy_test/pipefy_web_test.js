/// <reference types="cypress" />


describe('execute the pipefy front end test', () => {
  beforeEach(() => {
    cy.visit('https://app.pipefy.com/public/form/6qhKljB1')
  })
  it('fill the required inputs', () => {
    // Fills name parameter
    var my_name = 'Gabriela Ribas'
    cy.get('[name="customFields.your_name"]')
      .type(my_name).should('have.value', my_name)

    // Fills'why do you want to work at pipefy' parameter
    var why_work = 'Because it seems like a nice place to work at :)'
    cy.get('[name="customFields.why_do_you_want_to_work_at_pipefy"]')
      .type(why_work).should('have.value', why_work)

    // Checks B
    cy.get('[id="publicForm_customFields.check_b_option_B"]').check({force: true}).should('be.checked')

    // Adds user
    cy.get('[class="pp-action-add pp-ico-assignee"]').click()
    cy.get('[title="felipe fantoni"]').click()
    cy.get('[name="customFields.your_name"]') // This click will close the "add user window"
    cy.get('[alt="felipe fantoni"]').should('exist') // Checks if the user was added

    // Sets current date/time
    cy.get('[id="fake-pipe-field-publicForm-customFields_select_today_s_date-input"]').click({force: true})
    cy.get('[title="Save"]').click()
    cy.get('[id="fake-pipe-field-publicForm-customFields_select_today_s_date-input"]').invoke('val').should('exist') // Checks if the value was filled

    // Selects B
    cy.get('[class="pp-select"]').select("B").should('have.value', "B")

    // Sets time
    var date = new Date();
    var current_time = date.toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'}).toLowerCase()
    cy.get('[name="customFields.what_time_is_it_now"]').type(current_time).should('have.value', current_time)

    // Attches file
    cy.get('[class="pp-action-add pp-ico-attachment"]')
    .attachFile('myfixture.jpg', { subjectType: 'drag-n-drop' });

    // Adds a Spanish phone number
    cy.get('[class="selected-flag"]').click()
    cy.get('[class="country"]').contains('Spain').then(option => {
        cy.wrap(option).contains('Spain'); // Asserts the right country was selected
        option[0].click();  // jquery click()
        cy.get('[title="Spain (España): +34"]').should('exist') // Asserts the selection persists
      });
    cy.get('[id="phone-field-id-Place a phone number from Spain country"]').type('612345678').should('have.value', '612 34 56 78')

    // Submits
    cy.get('[data-pp-button="submit-fields"]').click()

    // Fills email (if the email element has appeared, then the first submit was successful)
    cy.get('[name="creatorEmail"]').type('test@tesmail.com').should('have.value', 'test@tesmail.com')

    // Submits again
    cy.get('[data-pp-button="collect-creator-email"]').click()
    cy.get('[class="pp-new-public-form-success-message"]').should('exist') // Asserts the post successful submission message has been shown
  })
})
