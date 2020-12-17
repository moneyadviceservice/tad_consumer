/// <reference types="cypress" />

context('Rendering application', () => {

	context('Requests with Syndication-Tools', () => {
		  it('will not display header component', () => {
		    cy.visit({url: '/', headers: {"x-syndicated-tool": true} })
		    cy.get('header').should('not.exist')
		  })

		  it('will not display footer component', () => {
		    cy.visit({url: '/', headers: {"x-syndicated-tool": true} })
		    cy.get('footer').should('not.exist')
		  })
		})


	context('Requests without Syndication-Tools', () => {
		  it('will display header component', () => {
		    cy.visit({url: '/'})
		    cy.get('header').should('exist')
		  })

		  it('will display footer component', () => {
		    cy.visit({url: '/'})
		    cy.get('footer').should('exist')
		  })
	})

})