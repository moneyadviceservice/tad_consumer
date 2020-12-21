/// <reference types="cypress" />

context('Rendering application', () => {

	context('Requests with Syndication-Tools', () => {
		beforeEach(() => {
			cy.visit({url: '/', headers: {"x-syndicated-tool": true} })
		})


		  it('will not display header component', () => {
		    cy.get('header').should('not.exist')
		  })

		  it('will not display footer component', () => {
		    cy.get('footer').should('not.exist')
		  })
		})


	context('Requests without Syndication-Tools', () => {
			beforeEach(() => {
				cy.visit({url: '/'})
			})
			
		  it('will display header component', () => {
		    cy.get('header').should('exist')
		  })

		  it('will display footer component', () => {
		    cy.get('footer').should('exist')
		  })
	})

})