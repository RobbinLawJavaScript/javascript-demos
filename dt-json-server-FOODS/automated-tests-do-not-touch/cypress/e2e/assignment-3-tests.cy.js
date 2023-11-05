
const BACKEND_BASE_URL= 'http://localhost:5000'
beforeEach(() => {
  cy.log("intercepting requests to the backend.")

  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums*`, { fixture: 'all_albums_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums`, { fixture: 'all_albums_response.json' })

  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums?q=beatles*`, { fixture: 'beatles_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums?q=beatles`, { fixture: 'beatles_response.json' })
  
  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums?q=radiohead*`, { fixture: 'radiohead_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/topAlbums?q=radiohead`, { fixture: 'radiohead_response.json' })
  
})

describe('index is loaded correctly (debugging)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  })
})

describe('Tab Functionality works as expected', ()=> {
  it("When open the page tab the correct tab is shown", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("check if the search-album-tab does not have the d-none class")
    cy.get('#search-album-tab').should('not.have.class', 'd-none')

    cy.log("check if the my-albums-tab has the d-none class")
    cy.get('#my-albums-tab').should('have.class', 'd-none')
  })

  it("When clicking on the my-albums-tab the correct tab is shown", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("click on the 'My Albums'")
    cy.get('#album-tab-navigation').children().eq(1).click()
    
    cy.log("check if the search-album-tab has the d-none class")
    cy.get('#search-album-tab').should('have.class', 'd-none')

    cy.log("check if the my-albums-tab does not have the d-none class")
    cy.get('#my-albums-tab').should('not.have.class', 'd-none')

    cy.log("click on the 'Search Albums'")
    cy.get('#album-tab-navigation').children().eq(0).click()

    cy.log("check if the search-album-tab does not have the d-none class")
    cy.get('#search-album-tab').should('not.have.class', 'd-none')

    cy.log("check if the my-albums-tab has the d-none class")
    cy.get('#my-albums-tab').should('have.class', 'd-none')
  })

})

describe('Page uses backend searching correctly', ()=> {
  
  it("loads albums from backend server the form is submitted (should have more than 19)", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')
  
    cy.log("submit the form with and empty search.")
    cy.get('#search-album-form').submit()

    cy.log("check that the albums are loaded, there should be more than 19.")
    cy.get('#searched-albums-list').children().should('have.length.greaterThan', 19)
  })

  it("searches for albums by artist correctly (beatles)", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the beatles.")
    cy.get('input[name="query"]').type("beatles")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("check that the albums are loaded, there should be 6.")
    cy.get('#searched-albums-list').children().should('have.length', 6)

    cy.log("check that the first album is abbey road")
    cy.get('#searched-albums-list').children().first().should('contain', 'Abbey Road')
  })

  it("mutliple searches for albums can happen", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the beatles.")
    cy.get('input[name="query"]').type("beatles")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("check that the albums are loaded, there should be 6.")
    cy.get('#searched-albums-list').children().should('have.length', 6)

    cy.log("check that the first album is abbey road")
    cy.get('#searched-albums-list').children().first().should('contain', 'Abbey Road')

    cy.log("reset the search input.")
    cy.get('input[name="query"]').clear()

    cy.log("get the search input, and type in radiohead.")
    cy.get('input[name="query"]').type("radiohead")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("check that the albums are loaded, there should be 6.")
    cy.get('#searched-albums-list').children().should('have.length', 6)

    cy.log("check that the first album is ok computer")
    cy.get('#searched-albums-list').children().first().should('contain', 'OK Computer')
  })
})

describe('User can save an album', ()=> {
  it("searches for albums by artist correctly (beatles)", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the beatles.")
    cy.get('input[name="query"]').type("beatles")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("click the first 'Add to my Albums' button")
    cy.get('#searched-albums-list').children().first().find('button').click()

    cy.log("check that the album is removed from the search results")
    cy.get('#searched-albums-list').children().should('have.length', 5)

    cy.log("check that the album is added to the my albums list")
    cy.get('#my-albums').children().should('have.length', 1)

    cy.log("check that the album 'Abbey Road' (the first) is added to the my albums list")
    cy.get('#my-albums').children().should('contain', 'Abbey Road')
  })

  it("does multiple searches and adds multiple albums to the 'My albums tab' ", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the beatles.")
    cy.get('input[name="query"]').type("beatles")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("click the second 'Add to my Albums' button")
    cy.get('#searched-albums-list').children().eq(1).find('button').click()
    
    cy.log("check that the album is removed from the search results")
    cy.get('#searched-albums-list').children().should('have.length', 5)

    cy.log("check that the album is added to the my albums list")
    cy.get('#my-albums').children().should('have.length', 1)

    cy.log("check that the album 'Revolver' (the second) is added to the my albums list")
    cy.get('#my-albums').children().should('contain', 'Revolver')

    cy.log("reset the search input.")
    cy.get('input[name="query"]').clear()

    cy.log("get the search input, and type in radiohead.")
    cy.get('input[name="query"]').type("radiohead")

    cy.log("submit the form")
    cy.get('#search-album-form').submit()

    cy.log("click the first 'Add to my Albums' button")
    cy.get('#searched-albums-list').children().first().find('button').click()

    cy.log("check that the album is removed from the search results")
    cy.get('#searched-albums-list').children().should('have.length', 5)

    cy.log("check that the album is added to the my albums list")
    cy.get('#my-albums').children().should('have.length', 2)

    cy.log("check that the album 'OK Computer' is added to the my albums list")
    cy.get('#my-albums').children().should('contain', 'OK Computer')
  })
})
