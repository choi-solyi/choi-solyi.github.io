const todoForm = document.getElementById('todo-form')
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById('todo-list')

let todos = []
const TODOS_KEY = 'TODOS_KEY'
function handleTodoSubmit(event) {
  event.preventDefault()
  const newTodo = todoInput.value
  todoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todos.push(newTodoObj)
  addTodo(newTodoObj)
  saveTodos()
}

function addTodo(newTodo) {
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '✖'
  deleteBtn.addEventListener('click', deleteTodo)
  li.appendChild(span)
  li.appendChild(deleteBtn)
  todoList.appendChild(li)
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.id
  li.remove()
  todos = todos.filter(todo => todo.id !== parseInt(li.id))
  saveTodos()
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

todoForm.addEventListener('submit', handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  todos = parsedTodos
  parsedTodos.forEach(item => {
    addTodo(item)
  })
}
