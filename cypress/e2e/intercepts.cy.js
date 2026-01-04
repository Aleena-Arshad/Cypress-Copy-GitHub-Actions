// 2 status codes: 200 (success) and 401 (invalid login).
// Orange hrm auth does not provide intercept path
describe('Netowrk Intercept - Code', () => {


// Correct Example ------------------------------------------------------------
// Note: you define the intercept first to tell Cypress what response to return, 
// then you perform the UI actions (like typing credentials, filling forms, 
// clicking buttons) to trigger that mocked request.


// 200
it('Netowrk Intercept - success (200)', () => {
  cy.intercept('POST', 'https://api.realworld.io/api/users/login', {
    statusCode: 200,
    body: {
      user: {
        email: 'test@test.com',
        token: 'fake-jwt-token',
        username: 'testuser'
      }
    }
  }).as('loginSuccess'); // gives name to intercepted request

  cy.visit('https://demo.realworld.io/#/login');

  cy.get('input[type="email"]').type('test@test.com');
  cy.get('input[type="password"]').type('password123');
  cy.get('button[type="submit"]').click();

  cy.wait('@loginSuccess')
    .its('response.statusCode')
    .should('eq', 200);
});

});


// ------------------------


// ✅ Note 1
// cy.intercept mocks the API response so the test is independent of real server behavior.
// You can simulate any status code like 200, 401, 500, etc.
// This approach helps verify UI behavior for both success and failure.

// Note 2
// You include data in the intercept body when the UI depends on the API response to proceed (e.g., login needs a token/user object).


// 1️⃣ Using Browser Developer Tools
// Open Chrome/Edge/Firefox and go to https://opensource-demo.orangehrmlive.com/.
// Press F12 (or right-click → Inspect) → open Network tab.
// Type a username & password and click Login.
// In the Network tab, look for a POST request triggered by the login button.
// Click it → check the Request URL.
// That’s the endpoint you use in cy.intercept().


// cursor ai > cypress role: https://github.com/tayyabakmal1/qa-prompt-library/blob/main/cursor-ai/cypress-role.md

