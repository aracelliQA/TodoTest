/// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page";
describe ('Filtering', () => {
    const todoPage = new TodoPage()
    beforeEach( () => {
        todoPage.navigate()
        todoPage.addToDo("Buy a new Jeans{enter}")
        todoPage.addToDo("Clean the kitchen{enter}")
        todoPage.addToDo("Wash the hair{enter}")
        todoPage.addToDo("Call mom{enter}")
        todoPage.addToDo("Make some cookies{enter}")

        todoPage.toggleTodo(1)
        todoPage.toggleTodo(3)
        })

    it('Should filter Active ToDos', () => {
        todoPage.showOnlyActiveTodos()
        todoPage.validateNumberOfTodosShown(3)

    })

    it('Should filter Completed ToDos', () => {
        todoPage.showOnlyCompletedTodos()
        todoPage.validateNumberOfTodosShown(2)
    })

    it('Should Show All ToDos', () => {
        todoPage.showAllTodos()
        todoPage.validateNumberOfTodosShown(5)
    })

})
