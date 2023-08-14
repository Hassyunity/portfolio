import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the user is on the todo app page', () => {
  cy.visit('/todo.cy.js');
});
