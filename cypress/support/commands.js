Cypress.Commands.add('clickElement', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).click();
  });
  
  Cypress.Commands.add('sendKeysToElement', { prevSubject: 'element' }, (subject, keys) => {
    cy.wrap(subject).type(keys);
  });
  
  Cypress.Commands.add('isElementPresent', { prevSubject: 'optional' }, (subject, selector) => {
    const element = subject ? subject.find(selector) : cy.get(selector);
    return element.should('exist');
  });
  
  Cypress.Commands.add('getText', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).invoke('text');
  });
  