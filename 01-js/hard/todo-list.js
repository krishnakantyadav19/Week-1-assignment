/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todosObj = []
  }
  add(todo){
    this.todosObj.push(todo)
    return this.todosObj;
  }
  remove(indexOfTodo){
    this.todosObj.splice(indexOfTodo,1)
    return this.todosObj;
  }
  update(index, updatedTodo){
    // this.remove(index);
    if(this.todosObj.length -1 < index){
      return this.todosObj;
    }
    this.todosObj.splice(index,1,updatedTodo)
    return this.todosObj;
  }
  getAll(){
    return this.todosObj;
  }
  get(indexOfTodo){
    if(this.todosObj.length -1 < indexOfTodo){
      return null;
    }
    return this.todosObj[indexOfTodo]
  }
  clear(){
    this.todosObj = []
    return this.todosObj;
  }
}
// Example usage:
// const todoList = new Todo();

// var result = todoList.add('Task 1');
// result = todoList.add('Task 2');
// result = todoList.add('Task 3');
// console.log(result,"result1"); // Output: 24
// result = todoList.remove(1)
// console.log(result,"result2"); // Output: 24

module.exports = Todo;
