// cypress/integration/steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the todo app page', () => {
  cy.visit('https://example.cypress.io/todo');
});

Then('the user should see {int} default todo items', (count) => {
  cy.get('.todo-list li').should('have.length', count);
});

Then('the first item should be {string}', (text) => {
  cy.get('.todo-list li').first().should('have.text', text);
});

Then('the last item should be {string}', (text) => {
  cy.get('.todo-list li').last().should('have.text', text);
});

When('the user adds a new todo item {string}', (newItem) => {
  cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);
});

When('the user checks off the item {string}', (itemText) => {
  cy.contains(itemText).parent().find('input[type=checkbox]').check();
});

Then('the item {string} should be marked as completed', (itemText) => {
  cy.contains(itemText).parents('li').should('have.class', 'completed');
});

// Ajoutez les autres étapes de manière similaire
