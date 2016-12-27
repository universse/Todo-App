export default {
  setTodos (todoList) {
    if (Array.isArray(todoList)) {
      localStorage.setItem('todoList', JSON.stringify(todoList))
      return todoList
    }
  },
  getTodos () {
    var todoListString = localStorage.getItem('todoList')
    var todoList = []
    try {
      todoList = JSON.parse(todoListString)
    } catch (e) {
    }

    return Array.isArray(todoList) ? todoList : []
  }
}
