var count=0
it('first test, no todos', ()=>{
  cy.visit('/')

  cy.get('#newTODO').should('contain','')
  cy.get('#create-todo').should('contain','Create')

})

it('create 5 TODOs and mark 2 done',() =>{
   cy.visit('/')
  
    cy.createTODO('Mop the floor')
    cy.createTODO('Read book')
    cy.createTODO('Hear Music')
    cy.createTODO('Pray to God')
    cy.createTODO('Sleep')

    
    cy.markdone(2)
    cy.markdone(3-count)
    
  
})

Cypress.Commands.add('markdone',(text)=>{
  cy.get('#todo-body').find(`button[cy-data="todo-${text}"]`).click()
  count++
})

Cypress.Commands.add('createTODO',(text)=>{
  cy.get('#newTODO').type(text),
  cy.get('#create-todo').click()
  cy.get('#newTODO').clear()
})

