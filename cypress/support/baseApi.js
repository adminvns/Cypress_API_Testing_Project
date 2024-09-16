const baseUrl = Cypress.env('baseUrl')

const apiRequest = (endpoint, method = 'GET', body = null) => {
    return cy.request({
      method,
      url: `${baseUrl}/${endpoint}`,
      body,
    });
  };
  
  // Define API methods as constants
  export const getPeople = () => apiRequest('people/');
  export const getPersonById = (id) => apiRequest(`people/${id}/`);
  
  // Define reusable assertion methods
  export const verifyStatusCode200 = (response) => {
    expect(response.status).to.eq(200);
  };
  
  export const verifyResponseHasProperty = (response, property) => {
    expect(response.body).to.have.property(property);
  };
  
  export const verifyResponseIsArray = (response, property) => {
    expect(response.body[property]).to.be.an('array');
  };
  
  export const verifyName = (response, expectedName) => {
    expect(response.body.name).to.eq(expectedName);
  };
  