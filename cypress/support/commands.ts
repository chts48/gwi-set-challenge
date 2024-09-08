/// <reference types="Cypress" />

import { SELECTORS } from "./selectors";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('checkAscendingSorting', (elNumber, isDate, length) => {

    let value1: any;
    let value2: any;

    if (length > 2) {
      //checking two times two ensure that the sorting remains the same regardless of the clicks on the button
      for (let i = 1; i <= 2; i++) {
        cy.get(SELECTORS.headerButton).eq(elNumber).click().should('have.css', 'font-weight', '700');

        for (let j = 1; j <= (length - 2); j++) {
          cy.get(SELECTORS.tableRows).eq(j).find(SELECTORS.typographyItem).eq(elNumber).invoke('text').then((text) => {
            if (isDate) value1 = Date.parse(text);
            else value1 = text;
          })

          cy.get(SELECTORS.tableRows).eq(j + 1).find(SELECTORS.typographyItem).eq(elNumber).invoke('text').then((text) => {
            if (isDate) value2 = Date.parse(text);
            else value2 = text;
          })

          cy.then(() => {
            expect(value1 <= value2, `${value1} is not lower or equal to ${value2}`).to.be.true;
          })
        }
      }
    }
    else expect(true, 'There are not enough records to assert the sorting').to.be.false;
  }
)

declare global {
    namespace Cypress {
        interface Chainable{
            checkAscendingSorting (elNumber: number, isDate: boolean, length: number) : Chainable<void>

        }
    }
}