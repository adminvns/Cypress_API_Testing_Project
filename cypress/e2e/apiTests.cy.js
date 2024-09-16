// cypress/e2e/apiTests.cy.js
import { getPeople, getPersonById, verifyStatusCode200, verifyResponseHasProperty, verifyResponseIsArray, verifyName } from '../support/baseApi';

describe('SWAPI API test cases Verification Suite!', () => {

  it('Verify that the response returns a list of people as Array!', () => {
    getPeople().then((response) => {
      verifyStatusCode200(response);
      verifyResponseHasProperty(response, 'results');
      verifyResponseIsArray(response, 'results');
    });
  });

  it('Verify that a specific person is retrieved by ID Successfully!', () => {
    getPersonById(1).then((response) => {
      verifyStatusCode200(response);
      verifyResponseHasProperty(response, 'name');
      verifyName(response, 'Luke Skywalker');
    });
  });
});
