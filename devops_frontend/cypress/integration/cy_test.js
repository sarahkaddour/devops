describe('Creating a user', () => {
    it('Visits the website', () => {
      cy.visit('/');
    })
    it('Should contain a table', () => {
      cy.get('#table').should('be.visible');
    })
    it('Creates a user', () => {
      cy.get('.add').click();
      cy.get('#username').type('skr');
      cy.get('#firstname').type('Sarah');
      cy.get('#lastname').type('Kaddour');
      cy.get('#team').select('Green');
      cy.get('.btn-success').click();
      cy.reload();
    })
    it('Should contain a table with data created', () => {
      cy.wait(3000);
      cy.get('tr').should('contain', 'skr');
    })
  })


  describe('Deleting a user', () => {
    it('Visits the website', () => {
      cy.visit('/');
    })
    it('Should contain a table with data created', () => {
      cy.get('#table').should('be.visible');
    })
    it('Deletes a user', () => {
      cy.get('[type="radio"]').first().check();
      cy.get('.delete').click();
    })
    it('Should not contain deleted value in table', () => {
      cy.get('tr').should('contain','No users');
    })
  })