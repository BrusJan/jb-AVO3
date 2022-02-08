describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=text:Button;'));
  it('should render the component', () => {
    cy.get('mfe-button').should('exist');
  });
});