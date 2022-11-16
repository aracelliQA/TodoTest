// Aracelli Novaes da Palma
// QA Tester
// LinkedIn: www.linkedin.com/in/aracelliqa
// Testing Todo Mvc App functionalities using Cypress
// App link: https://todomvc-app-for-testing.surge.sh/

/// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page";
const todoPage = new TodoPage()
describe('to do actions' , () => {


    beforeEach( () => {
    todoPage.navigate()
    todoPage.addToDo("Buy a new Jeans")
    })

   
describe('toggling todos', () => {
        it('should toggle test correctly', () => {
          todoPage.toggleTodo(0)
          todoPage.validateTodoCompletedState(0, true)
        })
    
        it('should clear completed', () => {
          todoPage.toggleTodo(0)
    
          todoPage.clearCompleted()
    
          todoPage.validateNumberOfTodosShown(0)
        })
      })
    
    })