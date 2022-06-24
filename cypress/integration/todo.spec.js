/// <reference types="Cypress" />

// describe('TODO App > ', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })

//   it('OK, there are no TODOs >', () => {
//     cy.get('#todo-body').children().should('have.length', 0);
//     cy.get('#done-body').children().should('have.length', 0);
//   });

//   it('OK, create a TODO >', () => {
//     cy.createTODO("Mop the floor");
//     cy.get('#todo-body').children().should('have.length', 1);
//     cy.get('#done-body').children().should('have.length', 0);
//   });

//   it('OK, create a TODO & mark it done >', () => {
//     cy.createTODO("Hoover the floor");
//     cy.get('button[cy-data="todo-0"]').click();
//     cy.get('#todo-body').children().should('have.length', 0);
//     cy.get('#done-body').children().should('have.length', 1);
//   });

//   it('OK, create 5 TODOs & mark 2 done >', () => {
//     cy.createTODO("Mop the floor");
//     cy.createTODO("Mop the floor");
//     cy.createTODO("Mop the floor");
//     cy.createTODO("Mop the floor");
//     cy.createTODO("Mop the floor");
//     cy.get('button[cy-data="todo-0"]').click();
//     cy.get('button[cy-data="todo-3"]').click();
//     cy.get('#todo-body').children().should('have.length', 3);
//     cy.get('#done-body').children().should('have.length', 2);
//   });
// })

//Punya Icha
var count=0
it('first test, no todos', ()=>{
  cy.visit('/')

  cy.get('#newTODO').should('contain','')
  cy.get('#create-todo').should('contain','Create')

})

it('create 5 TODOs and mark 2 done',() =>{
    
    cy.createTODO('Interview 2 jam lagi')
    cy.createTODO('Secukupnya')
    cy.createTODO('Hindia')
    cy.createTODO('Family Guy')
    cy.createTODO('tulung Gusti')

    
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

