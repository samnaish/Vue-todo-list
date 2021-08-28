
new Vue({
    el: '#app',
    data: {
        isEditing: false,
        selectedIndex: null,
        todo: '',
        todos: [],
    },
    methods: {
        storeTodo() {
            // adds the craeted todo, to the list
            this.todos.push(this.todos)
            // clears the input field of text
            this.todo = ''
        },
        editTodo(index, todo) {
            this.todo = todo
            this.selectedIndex = index
            this.isEditing = true
        },
        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo)
        },
        removeTodo(index) {
            // deletes by finding the id / index of the todo
            this.todos.splice(index, 1)
        }
}
})
