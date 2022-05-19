const app = new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Comprare il pane", showEdit: false, done: "", hide: "" },
      { text: "Andare a prendere le lenti a contatto", showEdit: false, done: "", hide: "" },
      { text: "Farsi la doccia", showEdit: false, done: "", hide: "" },
    ],
    newTodo: "",
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      this.todos.push({ text: this.newTodo, showEdit: false, done: "", hide: "" });
      this.newTodo = "";
    },

    editTodo(todo, event) {
      todo.text = event.target.value;
      this.toggleEditInput(todo);
    },

    deleteTodo(todo) {
      this.todos = this.todos.filter((t) => todo !== t);
    },

    completeTodo(todo) {
      todo.done = !todo.done ? "done" : "";
    },

    toggleEditInput(todo) {
      todo.showEdit = todo.showEdit ? false : true;
    },

    toggleCompletedTodos() {
      this.todos
        .filter((todo) => todo.done.length > 0)
        .forEach((todo) => {
          if (todo.hide.includes("hidden")) {
            todo.hide = todo.hide.replace("hidden", "");
          } else {
            todo.hide += " hidden";
          }
        });
    },
  },
});


// Ciao sono Giuseppe